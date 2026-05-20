/* eslint-disable react/prop-types */
export default function Links({ label, icon, bg }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-4 rounded-xl" style={{backgroundColor: bg}}>
        {icon}
      </div>
      <p className="nav-label">{label}</p>
    </div>
  )
}