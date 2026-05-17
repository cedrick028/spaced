import { ChefHat, Home, NotepadText, ShoppingBasket, Wallet } from "lucide-react";
import NavItem from "./NavItem";

export default function Nav() {
  const navItem = [
    { id: 1, label: "Home", icon: <Home />, link: "/" },
    { id: 2, label: "Expense", icon: <Wallet />, link: "/expense" },
    { id: 3, label: "Grocery", icon: <ShoppingBasket />, link: "/grocery" },
    { id: 4, label: "Recipe", icon: <ChefHat />, link: "/recipe" },
    { id: 5, label: "Notes", icon: <NotepadText />, link: "/notes" }
  ]

  return (
    <div className="w-full fixed bottom-0 flex items-center justify-around bg-white p-4 border-t-[8px] border-t-[#f8f7fc]">
      {
        navItem.map((nav) => (
          <NavItem key={nav.id} label={nav.label} icon={nav.icon} link={nav.link} />
        ))
      }
    </div>
  )
}