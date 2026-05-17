import GroceryOverview from "../../features/grocery overview/GroceryOverview";
import RecipeOverview from "../../features/recipe overview/RecipeOverview";

export default function KitchenOverview() {
  return (
    <div className="flex gap-4 m-4">
      <GroceryOverview />
      <RecipeOverview />
    </div>
  )
}