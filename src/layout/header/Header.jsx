import './header.css';

export default function Header() {
  return (
    <div className="m-4 mb-8">
      <p>Good morning,</p>
      <div className="flex items-center gap-1 mt-2">
        <h1 className="user">Cedrick</h1>
        <p className="text-3xl leading-none">&#128075;</p>
      </div>
      {/* <p className="label">Here&apos;s your overview for today.</p> */}
    </div>
  )
}