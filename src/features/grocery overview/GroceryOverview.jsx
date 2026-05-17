import './groceryOverview.css';

export default function GroceryOverview() {
  return (
    <div className="flex-1 border border-white rounded-xl p-4 grocery-overview-container">
      <h2>Grocery & Stocks</h2>
      <div className="my-5">
        <p className="label">You have</p>
        <p className="font-bold my-2">12 items</p>
        <p className="label">running low</p>
      </div>
      <button className="w-full view-grocery-button">View Grocery List</button>
    </div>
  )
}