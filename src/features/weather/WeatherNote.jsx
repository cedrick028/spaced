import { Shirt } from "lucide-react";
import './weatherNote.css'

export default function WeatherNote() {
  return (
    <div className="flex items-center justify-between mt-4 card-accent">
      <div>
        <p className="title accent-title">Great day for laundry!</p>
        <p className="mt-2 label">Sunshine all day with low humidity.</p>
      </div>
      <div>
        <div className="p-2 rounded-full icon-container">
          <Shirt color="#3B5BDB" />
        </div>
      </div>
    </div>
  )
}