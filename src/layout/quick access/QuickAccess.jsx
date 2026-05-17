import { CookingPot, CreditCard, PencilLine, ShoppingCart } from "lucide-react"
import QuickAccessLink from "./QuickAccessLink"

export default function QuickAccess() {
  const quickAccessLink = [
    { id: 1, label: "+ Expense", icon: <CreditCard stroke="#6B7280" />, bg: "#f2f2fc" },
    { id: 2, label: "+ Grocery", icon: <ShoppingCart stroke="#6B7280" />, bg: "#f2f2fc" },
    { id: 3, label: "+ Recipe", icon: <CookingPot stroke="#6B7280" />, bg: "#f2f2fc" },
    { id: 4, label: "+ Note", icon: <PencilLine stroke="#6B7280" />, bg: "#f2f2fc" },
  ]
  return (
    <div className="card-white">
      <h2>Quick Access</h2>
      <div className="flex items-center justify-around mt-5">
        {
          quickAccessLink.map((link) => (
            <QuickAccessLink key={link.id} label={link.label} icon={link.icon} bg={link.bg} />
          ))
        }
      </div>
    </div>
  )
}