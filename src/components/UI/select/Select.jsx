/* eslint-disable react/prop-types */
export default function Select({ placeholder, options, value, onChange, className }) {
  return (
    <div className={`h-7 w-full min-w-0 flex items-center rounded-md border bg-white px-2 ${className ?? ""}`}>
      <select value={value} onChange={onChange} className="w-full min-w-0 bg-transparent outline-none">
        <option hidden value="">{ value ? value : placeholder }</option>
        {
          options.map((o) => (
            <option key={o.value} value={o.value}>{ o.label }</option>
          ))
        }
      </select>
    </div>
  )
}