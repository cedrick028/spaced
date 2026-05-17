import Donut from "../../components/charts/Donut";
import Horizontal from "../../components/charts/Horizontal";

export default function ExpenseOverview() {
  return (
    <div className="card-white">
      <div className="flex items-center justify-between">
        <h2>This Month Overview</h2>
        <p className="link">See All</p>
      </div>
      
      <div className="flex items-center mt-5">
        <div className="w-8/12">
          <p className="label">Total Expenses</p>
          <p className="mt-3 amount">₱1,240.50</p>
          <p className="mt-5 label">₱759.50 left of ₱2,000.00</p>
          <div className="mt-1 -ml-1">
            <Horizontal />
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <Donut />
        </div>
      </div>
    </div>
  )
}