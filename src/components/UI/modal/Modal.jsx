/* eslint-disable react/prop-types */
import { X } from "lucide-react";

export default function Modal({ label, icon: Icon, children, closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm" onClick={closeModal}>
      <div className="rounded-md bg-white shadow-2xl ring-1 ring-gray-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
              <Icon size={16} stroke="#444444" />
            </div>
            <p className="text-[15px] font-bold text-dark">{ label }</p>
          </div>
          <div className="w-7 h-7 flex items-center justify-center border rounded-md">
            <X size={16} className="cursor-pointer" onClick={closeModal} />
          </div>
        </div>
        <div>
          { children }
        </div>
      </div>
    </div>
  )
}