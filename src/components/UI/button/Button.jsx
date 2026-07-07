/* eslint-disable react/prop-types */
export default function Button({ label, variant, onClick, disabled }) {
  const buttonVariants = {
    primary: "bg-dark text-white",
    secondary: "bg-fair text-dark border"
  }
  return (
    <button className={`${buttonVariants[variant]} h-7 flex items-center px-4 text-medium rounded-md`} disabled={disabled} onClick={onClick}>
      <span>{ label }</span>
    </button>
  )
}