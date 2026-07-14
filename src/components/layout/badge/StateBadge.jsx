import { formatString } from "../../../utils/upperCasedFirstLetter"

/* eslint-disable react/prop-types */
export default function StateBadge({ state }) {
  const badgeColor = {
    active: "bg-[green]",
    draft: "bg-light",
    closed: "bg-[orange]",
  }
  return (
    <div className="inline-flex h-7 w-fit items-center gap-2 rounded-md border px-2 text-sm whitespace-nowrap">
      <div className={`w-1.5 h-1.5 rounded-full ${badgeColor[state.toLowerCase()]}`}></div>
      <p>{ formatString(state)}</p>
    </div>
  )
}