import ExpenseOverview from "../features/expense overview/ExpenseOverview";
import QuickAccess from "../layout/quick access/QuickAccess";
import Header from "../layout/header/Header";
import KitchenOverview from "../layout/kitchen overview/KitchenOverview";
import NotesOverview from "../features/notes overview/NotesOverview";


export default function Home() {
  return (
    <div className="h-[calc(100vh-84px)] overflow-y-auto" >
      <Header />
      <QuickAccess />
      <ExpenseOverview />
      <KitchenOverview />
      <NotesOverview />
    </div>
  )
}