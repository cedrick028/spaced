import { useNavigate } from "react-router-dom"

export default function IntroPage() {
  const navigate = useNavigate();

  const loggedUser = (userType) => {
    navigate(`/spaced/${userType}/dashboard`)
  }
  return (
    <div className="flex gap-2">
      <button className="p-2 border rounded-md" onClick={() => loggedUser('admin')}>Admin</button>
      <button className="p-2 border rounded-md" onClick={() => loggedUser('regular')}>Regular</button>
    </div>
  )
}