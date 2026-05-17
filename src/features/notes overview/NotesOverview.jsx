import { CalendarDays, Sun } from "lucide-react";
import ReminderItem from "./ReminderItem";

export default function NotesOverview() {
  const reminderList = [
    { id: 1, title: "Attend Mass", time: "12 PM", description: "Attend Sunday mass at St. Joseph Cathedral", done: false },
    { id: 2, title: "Go to Grocery", time: "4 PM", description: "Re-stocking of food supplies", done: false }
  ]
  return (
    <div className="card-white">
      <div className="flex justify-between items-center">
        <h2>Today&apos;s Overview</h2>
        <div className="flex items-center gap-2">
          <p className="link">View calendar</p>
          <CalendarDays size={20} color="#3B5BDB" />
        </div>
      </div>

      <div className="flex items-center gap-2 my-5">
        <Sun color="#eab308" />
        <p className="label">May 17, Sunday</p>
      </div>
      <div className="flex flex-col gap-2">
        {
          reminderList.map((reminder) => (
            <ReminderItem key={reminder.id} title={reminder.title} description={reminder.description} time={reminder.time} />
          ))
        }
      </div>
    </div>
  )
}