/* eslint-disable react/prop-types */
import './reminderItem.css'

export default function ReminderItem({ title, description, time }) {
  return (
    <div className="flex item-center gap-2 p-4 rounded-md bg-[#f8f7fc] border">
      <div className="w-8/12">
        <p>{title}</p>
        <p className="!text-xs mt-2 label">{description}</p>
      </div>
      <p className="flex-1 text-right label">{time}</p>
    </div>
  )
}