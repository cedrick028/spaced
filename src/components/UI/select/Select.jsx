/* eslint-disable react/prop-types */
export default function Select({ placeholder, options, value, onChange }) {
  return (
    <div className="h-7 flex items-center p-2 border rounded-md bg-white">
      <select value={value} onChange={onChange}>
        <option hidden value="">{ placeholder }</option>
        {
          options.map((o) => (
            <option key={o.value} value={o.value}>{ o.label }</option>
          ))
        }
      </select>
    </div>
  )
}