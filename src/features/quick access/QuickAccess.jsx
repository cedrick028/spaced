import { CookingPot, CreditCard, PencilLine, ShoppingCart } from "lucide-react"
import Links from "./Links"

export default function QuickAccess() {
  const accessLink = [
    { id: 1, label: "+ Expense", icon: <CreditCard color="#2e59f2" />, bg: "#f7f9fc" },
    { id: 2, label: "+ Grocery", icon: <ShoppingCart color="#49ab58" />, bg: "#f5faf5" },
    { id: 3, label: "+ Recipe", icon: <CookingPot color="#f78d36" />, bg: "#fcf7f0" },
    { id: 4, label: "+ Note", icon: <PencilLine color="#a578fa" />, bg: "#f8f5ff" },
  ]
  return (
    <div className="m-4 card-white">
      <p className="title">Quick Access</p>

      <div className="flex justify-around mt-4">
        {
          accessLink.map((link) => (
            <Links key={link.id} label={link.label} icon={link.icon} bg={link.bg} />
          ))
        }
      </div>
    </div>
  )
}