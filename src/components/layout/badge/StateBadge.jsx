import { formatString } from "../../../utils/upperCasedFirstLetter"

/* eslint-disable react/prop-types */
export default function StateBadge({ state }) {
  const badgeColor = {
    active: "bg-[green]",
    draft: "bg-light",
    closed: "bg-[orange]",
  }
  return (
    <div className="min-w-[72px] h-7 flex items-center gap-2 px-2 border rounded-md">
      <div className={`w-1.5 h-1.5 rounded-full ${badgeColor[state.toLowerCase()]}`}></div>
      <p>{ formatString(state)}</p>
    </div>
  )
}