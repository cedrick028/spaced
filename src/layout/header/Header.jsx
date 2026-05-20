import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-start m-4">
      <div>
        <p className="title">Good morning,</p>
        <h1 className="flex items-center gap-2 mt-2">Cedrick<span className="text-2xl">&#x1F44B;</span></h1>
      </div>
      <Menu size={28} />
    </div>
  )
}