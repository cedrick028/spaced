import './recipeOverview.css'

export default function RecipeOverview() {
  return (
    <div className="flex-1 flex flex-col justify-between border border-white rounded-xl p-4 recipe-overview-container">
      <div>
        <h2>Recipe Ideas</h2>
        <div className="mt-5">
          <p className="label">What do you want to cook today?</p>
        </div>
      </div>
      <button className="w-full view-recipe-button">Browse Recipe</button>
    </div>
  )
}