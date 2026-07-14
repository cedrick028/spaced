import { formatString } from "../../../utils/upperCasedFirstLetter"

/* eslint-disable react/prop-types */
export default function StatusBadge({ data }) {
  const badgeColor = {
    notstarted: "bg-light",
    inprogress: "bg-[#BFDBFE]",
    testing: "bg-[#FDE68A]",
    completed: "bg-[#BBF7D0]",
    rejected: "bg-[#FCA5A5]"
  }
  return (
    <div className="inline-flex items-center gap-2 whitespace-nowrap text-gray-500">
      <div className={`w-2 h-2 rounded-sm ${badgeColor[data.replace(/\s/g, '').toLowerCase()]}`}></div>
      <p className="text-sm">{ formatString(data) }</p>
    </div>
  )
}