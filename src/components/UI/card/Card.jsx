/* eslint-disable react/prop-types */
export default function Card({ className, icon: Icon, label, data }) {
  return (
    <div className={`flex min-w-0 flex-1 flex-col gap-2 rounded-md border bg-fair p-3 sm:flex-row sm:items-center ${className ?? ""}`}>
      <div className="h-7 w-7 flex items-center justify-center border rounded-md bg-white">
        <Icon size={16} />
      </div>
      <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
        <p className="text-[15px] font-bold text-dark">{ data }</p>
        <p className="text-sm leading-tight text-dark break-words">{ label }</p>
      </div>
    </div>
  )
}