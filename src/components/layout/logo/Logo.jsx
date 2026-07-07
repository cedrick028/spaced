import { Orbit } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className="h-14 flex items-center gap-2 px-4 border-b">
      <div className="w-7 h-7 flex items-center justify-center rounded-md bg-dark cursor-pointer" onClick={() => navigate('dashboard')}>
        <Orbit size={16} color="white" />
      </div>
      <p className="text-[15px] text-dark font-bold mt-0.5 cursor-pointer" onClick={() => navigate('dashboard')}>SPACED</p>
    </div>
  )
}