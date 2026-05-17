/* eslint-disable react/prop-types */
export default function QuickAccessLink({ label, icon, bg }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div style={{backgroundColor: bg}} className="p-4 rounded-xl">
        {icon}
      </div>
      <p className="nav-label">{label}</p>
    </div>
  )
}