import BudgetOverview from "../features/overview/budget/BudgetOverview";
import GroceryOverview from "../features/overview/grocery/GroceryOverview";
import RecipeOverview from "../features/overview/recipe/RecipeOverview";
import QuickAccess from "../features/quick access/QuickAccess";
import Weather from "../features/weather/Weather";
import Header from "../layout/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Weather />
      <QuickAccess />
      <BudgetOverview />
      <GroceryOverview />
      <RecipeOverview />
    </div>
  )
}