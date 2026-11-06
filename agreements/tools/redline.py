"""Word-level redline of two Markdown versions, rendered as one HTML page.

Usage: python3 -I redline.py OLD.md NEW.md OUT.html "Title" "Subtitle"
"""
import difflib
import html
import re
import subprocess
import sys

old_path, new_path, out_path, title, subtitle = sys.argv[1:6]
SENT = "XXSPLITXX"


def blocks(md):
    return [b.strip("\n") for b in re.split(r"\n\s*\n", md) if b.strip()]


def render(blks):
    src = ("\n\n" + SENT + "\n\n").join(blks)
    out = subprocess.run(
        ["pandoc", "-f", "gfm", "-t", "html", "--wrap=none"],
        input=src, capture_output=True, text=True, check=True).stdout
    parts = re.split(r"<p>" + SENT + r"</p>\n?", out)
    assert len(parts) == len(blks), (len(parts), len(blks))
    return [p.strip() for p in parts]


TOK = re.compile(r"<[^>]+>|&[#\w]+;|\w+|\s+|[^\w\s<&]")


def tokens(h):
    return TOK.findall(h)


def is_tag(t):
    return t.startswith("<")


def wrap(toks, kind):
    """Wrap runs of text tokens in <ins>/<del>, keeping tags outside."""
    out, run = [], []

    def flush():
        if "".join(run).strip():
            out.append(f"<{kind}>{''.join(run)}</{kind}>")
        else:
            out.append("".join(run))
        run.clear()

    for t in toks:
        if is_tag(t):
            flush()
            if kind == "ins":
                out.append(t)
        else:
            run.append(t)
    flush()
    return "".join(out)


def word_diff(oh, nh):
    a, b = tokens(oh), tokens(nh)
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    ops = [list(o) for o in sm.get_opcodes()]
    # Semantic cleanup: absorb short unchanged runs between two edits.
    changed = True
    while changed:
        changed = False
        for k in range(1, len(ops) - 1):
            op, i1, i2, j1, j2 = ops[k]
            if op != "equal" or ops[k - 1][0] == "equal" or ops[k + 1][0] == "equal":
                continue
            words = [t for t in a[i1:i2] if t.strip() and not is_tag(t)]
            if len(words) <= 3 and not any(is_tag(t) for t in a[i1:i2]):
                p, n = ops[k - 1], ops[k + 1]
                ops[k - 1:k + 2] = [["replace", p[1], n[2], p[3], n[4]]]
                changed = True
                break
    out = []
    for op, i1, i2, j1, j2 in ops:
        if op == "equal":
            out.append("".join(b[j1:j2]))
        else:
            if i2 > i1:
                out.append(wrap(a[i1:i2], "del"))
            if j2 > j1:
                out.append(wrap(b[j1:j2], "ins"))
    return "".join(out)


def text_of(h):
    return re.sub(r"<[^>]+>", "", h)


def label(h):
    t = html.unescape(text_of(h)).strip()
    t = re.sub(r"\s+", " ", t)
    return (t[:90] + "…") if len(t) > 90 else t


ob, nb = blocks(open(old_path).read()), blocks(open(new_path).read())
oh, nh = render(ob), render(nb)
sm = difflib.SequenceMatcher(None, ob, nb, autojunk=False)

body, changes = [], []


def change(kind, h, lab):
    n = len(changes) + 1
    changes.append((n, kind, lab))
    body.append(f'<div class="chg {kind}" id="c{n}"><span class="tag">{n}</span>{h}</div>')


for op, i1, i2, j1, j2 in sm.get_opcodes():
    if op == "equal":
        body.extend(nh[j1:j2])
        continue
    olds = list(range(i1, i2))
    # Pair each new block with the most similar unused old block, in order.
    used, pairs = set(), {}
    start = 0
    for j in range(j1, j2):
        best, bi = 0.0, None
        for i in olds[start:]:
            if i in used:
                continue
            r = difflib.SequenceMatcher(None, text_of(oh[i]), text_of(nh[j]), autojunk=False).ratio()
            if r > best:
                best, bi = r, i
        if bi is not None and best >= 0.45:
            pairs[j] = bi
            used.add(bi)
            start = olds.index(bi) + 1
    oi = i1
    pend = []

    def flush_new():
        if pend:
            h = "".join(nh[k].replace("<p>", "<p><ins>", 1).replace("</p>", "</ins></p>")
                        if nh[k].startswith("<p>") and nh[k].count("<p>") == 1
                        else wrap(tokens(nh[k]), "ins") for k in pend)
            lab = label(nh[pend[0]])
            if len(pend) > 1:
                lab += f" (+{len(pend) - 1} more new paragraphs)"
            change("insblk", h, "New: " + lab)
            pend.clear()

    for j in range(j1, j2):
        if j in pairs:
            flush_new()
            i = pairs[j]
            while oi < i:
                if oi not in used:
                    change("delblk", wrap(tokens(oh[oi]), "del"), "Deleted: " + label(oh[oi]))
                oi += 1
            change("mod", word_diff(oh[i], nh[j]), label(nh[j]))
            oi = i + 1
        else:
            pend.append(j)
    flush_new()
    while oi < i2:
        if oi not in used:
            change("delblk", wrap(tokens(oh[oi]), "del"), "Deleted: " + label(oh[oi]))
        oi += 1

toc = "\n".join(
    f'<li class="{k}"><a href="#c{n}">{html.escape(lab)}</a></li>' for n, k, lab in changes)

page = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title>
<style>
:root {{ --bg:#fff; --fg:#1d1d1f; --muted:#666; --ins:#0a6b2a; --insbg:#e3f6e8; --del:#a4161a; --delbg:#fde8e8; --chg:#f6f3e6; --line:#ddd; }}
@media (prefers-color-scheme: dark) {{ :root:not([data-theme="light"]) {{ --bg:#17181a; --fg:#e8e8e8; --muted:#9a9a9a; --ins:#7fe39a; --insbg:#173d22; --del:#ff9b9b; --delbg:#4a1c1c; --chg:#24231c; --line:#333; }} }}
body {{ background:var(--bg); color:var(--fg); font:16px/1.55 Georgia, "Times New Roman", serif; max-width:52rem; margin:0 auto; padding:1.5rem 16px 4rem; }}
h1.rl {{ font:600 1.4rem/1.3 system-ui, sans-serif; margin:0 0 .25rem; }}
p.sub {{ font:0.95rem system-ui, sans-serif; color:var(--muted); margin:0 0 1rem; }}
.legend {{ font:0.9rem system-ui, sans-serif; margin-bottom:1rem; }}
ins {{ color:var(--ins); background:var(--insbg); text-decoration:underline; }}
del {{ color:var(--del); background:var(--delbg); text-decoration:line-through; }}
details.toc {{ font:0.9rem/1.4 system-ui, sans-serif; border:1px solid var(--line); border-radius:8px; padding:.5rem .75rem; margin-bottom:2rem; }}
details.toc summary {{ cursor:pointer; font-weight:600; }}
details.toc ol {{ padding-left:1.6rem; margin:.5rem 0 0; }}
details.toc li {{ margin:.15rem 0; }}
details.toc li.insblk::marker {{ color:var(--ins); }}
details.toc li.delblk::marker {{ color:var(--del); }}
a {{ color:inherit; }}
.chg {{ position:relative; background:var(--chg); border-left:3px solid #c9a227; padding:.1rem .75rem; margin:.5rem -0.75rem; border-radius:0 6px 6px 0; scroll-margin-top:1rem; }}
.chg.insblk {{ border-left-color:var(--ins); }}
.chg.delblk {{ border-left-color:var(--del); }}
.tag {{ position:absolute; left:-2.4rem; top:.35rem; font:600 .75rem system-ui, sans-serif; color:var(--muted); }}
@media (max-width:60rem) {{ .tag {{ position:static; display:inline-block; margin-right:.4rem; }} }}
table {{ border-collapse:collapse; width:100%; }} td, th {{ border:1px solid var(--line); padding:.3rem .5rem; vertical-align:top; }}
blockquote {{ border-left:3px solid var(--line); margin-left:0; padding-left:1rem; color:var(--muted); }}
hr {{ border:0; border-top:1px solid var(--line); }}
</style></head><body>
<h1 class="rl">{html.escape(title)}</h1>
<p class="sub">{html.escape(subtitle)}</p>
<p class="legend"><ins>Inserted text</ins> &nbsp; <del>Deleted text</del> &nbsp; Changed paragraphs are shaded and numbered.</p>
<details class="toc" open><summary>{len(changes)} changed paragraphs: jump to</summary><ol>
{toc}
</ol></details>
{chr(10).join(body)}
</body></html>
"""
open(out_path, "w").write(page)
print(len(changes), "changes")
