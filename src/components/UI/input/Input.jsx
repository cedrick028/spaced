/* eslint-disable react/prop-types */
export default function Input({ placeholder, value, onChange, icon: Icon, className }) {
  return (
    <div className={`h-7 w-[250px] flex items-center justify-between gap-1 px-2 border rounded-md ${className}`}>
      <input placeholder={placeholder} value={value} onChange={onChange} className="w-full" />
      {
        Icon && (
          <Icon size={16} />
        )
      }
    </div>
  )
}