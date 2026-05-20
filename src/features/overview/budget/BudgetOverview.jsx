import Donut from "../../../components/charts/Donut";
import Horizontal from "../../../components/charts/Horizontal";

export default function BudgetOverview() {
  return (
    <div className="m-4 card-white">
      <div className="flex items-center justify-between">
        <p className="title">This Month Overview</p>
        <p className="link">See All</p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="w-8/12">
          <p className="font-medium">Total Expense</p>
          <p className="mt-2 amount">₱1,240.50</p>
          <p className="mt-4 label">₱759.50 left pf ₱2,000.00</p>
          <div className="-ml-1 mt-1" >
            <Horizontal />
          </div>
        </div>
        <div className="self-end">
          <Donut />
        </div>
      </div>
    </div>
  )
}