/* eslint-disable react/prop-types */
export default function Input({ placeholder, value, onChange, icon: Icon, className }) {
  return (
    <div className={`h-7 w-full min-w-0 flex items-center justify-between gap-1 rounded-md border px-2 ${className ?? ""}`}>
      <input placeholder={placeholder} value={value} onChange={onChange} className="w-full min-w-0 bg-transparent outline-none" />
      {
        Icon && (
          <Icon size={16} />
        )
      }
    </div>
  )
}