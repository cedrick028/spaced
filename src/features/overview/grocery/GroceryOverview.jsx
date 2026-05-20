import { Bell } from "lucide-react";
import './groceryOverview.css'

export default function GroceryOverview() {
  return (
    <div className="m-4 card-white !bg-[#f5faf5] border border-white grocery-overview-container">
      <div className="w-6/12 flex gap-4 ">
        <Bell color="#49ab58" size={46} />
        <div>
          <p className="title">12 items are running low</p>
          <p className="label mt-2">Milk, Eggs, Bananas, and 9 more items</p>
        </div>
      </div>

      <button className="w-6/12 py-2 rounded-xl text-[#49ab58] bg-[#f8faf8] border border-[#49ab58] mt-4">View Recipe</button>
    </div>
  )
}