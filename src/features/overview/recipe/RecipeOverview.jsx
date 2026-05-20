import { Clock, ForkKnife } from "lucide-react";
import recipe from '../../../assets/recipe_bg.png';

export default function RecipeOverview() {
  return (
    <div className="m-4 card-white">
      <div className="flex items-center justify-between">
        <p className="title">Smart Meal Suggestion</p>
        <p className="link">See All</p>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="w-4/12">
          <img src={recipe} className="w-full h-full" />
        </div>

        <div className="flex-1">
          <p className="font-bold">Garlic Butter Pasta</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <p className="label">20 mins</p>
            </div>

            <div className="flex items-center gap-2">
              <ForkKnife size={16} />
              <p className="label">Easy</p>
            </div>
          </div>
          <p className="mt-4 label">You have: Pasta, Garlic, Butter, Egg, Pamesan</p>
          <button className="w-full py-2 rounded-xl text-[#49ab58] bg-[#f8faf8] border border-[#49ab58] mt-4">View Recipe</button>
        </div>
      </div>
    </div>
  )
}