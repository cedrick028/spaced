/* eslint-disable react/prop-types */
export default function Card({ className, icon: Icon, label, data }) {
  return (
    <div className={`flex-1 flex items-center gap-2 p-2 border rounded-md bg-fair ${className}`}>
      <div className="h-7 w-7 flex items-center justify-center border rounded-md bg-white">
        <Icon size={16} />
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-[15px] font-bold text-dark">{ data }</p>
        <p className="mt-0.5">{ label }</p>
      </div>
    </div>
  )
}