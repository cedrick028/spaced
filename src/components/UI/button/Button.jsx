/* eslint-disable react/prop-types */
export default function Button({ label, variant, onClick, disabled, className }) {
  const buttonVariants = {
    primary: "bg-dark text-white",
    secondary: "bg-fair text-dark border",
    delete: "bg-[#EF4444] text-white"
  }
  return (
    <button className={`${buttonVariants[variant]} h-7 flex items-center justify-center px-4 text-medium rounded-md ${className ?? ""}`} disabled={disabled} onClick={onClick}>
      <span>{ label }</span>
    </button>
  )
}