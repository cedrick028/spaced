import { ChevronRight, CloudRain, MapPin, Sun } from "lucide-react";
import WeatherNote from "./WeatherNote";

export default function Weather() {
  return (
    <div className="card-white m-4">
      <div className="flex">
        <div className="flex-1 flex items-center gap-4">
          <Sun size={64} color="#facc15" />
          <div>
            <h1>31°c</h1>
            <p className="mt-1 title">Sunny</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mt-2">
            <MapPin size={16} color="#667085" strokeWidth={3} />
            <p className="label">Manila, Philippines</p>
          </div>
          <div className="flex-1 flex items-center gap-1 mt-2">
            <CloudRain size={16} color="#667085" strokeWidth={3} />
            <p className="label">Rain at 4:00 PM</p>
            <ChevronRight size={18} color="#667085" strokeWidth={3} />
          </div>
        </div>
      </div>

      <WeatherNote />
    </div>
  )
}