import { formatString } from "../../../utils/upperCasedFirstLetter"

/* eslint-disable react/prop-types */
export default function PriorityBadge({ data }) {
  const badgeColor = {
    low: "bg-white border",
    medium: "bg-[#e7e7e7]",
    high: "bg-[#bfbfbf]",
    urgent: "bg-dark",
  }
  return (
    <div className="inline-flex w-fit items-center gap-2 whitespace-nowrap">
      <div className={`w-2 h-2 rounded-sm ${badgeColor[data.toLowerCase()]}`} />
      <p className="w-fit text-sm">
        { formatString(data) }
      </p>
    </div>
  )
}