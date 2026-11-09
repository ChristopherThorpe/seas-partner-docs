-- Pandoc Lua filter: give every "Note for counsel" block the red
-- "Note for Counsel" paragraph style from agreements/tools/reference.docx.
-- A note is a block quote whose first paragraph starts with bold text
-- beginning "Note for counsel".
function BlockQuote(el)
  local first = el.content[1]
  if first and (first.t == "Para" or first.t == "Plain") then
    local lead = first.content[1]
    if lead and lead.t == "Strong"
        and pandoc.utils.stringify(lead):match("^Note for counsel") then
      return pandoc.Div(el.content, { ["custom-style"] = "Note for Counsel" })
    end
  end
end
