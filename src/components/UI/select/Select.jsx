/* eslint-disable react/prop-types */
export default function Select({ placeholder, options, value, onChange }) {
  return (
    <div className="h-7 flex items-center px-2 border rounded-md bg-white">
      <select value={value} onChange={onChange}>
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