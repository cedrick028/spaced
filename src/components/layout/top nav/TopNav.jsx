import { ClipboardList, Folder, Grip, Users } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";

export default function TopNav() {
  const location = useLocation();
  const { role, id } = useParams();


  const loggedUser = {
    admin: ["AU", "Admin User"],
    regular: ["RU", "Regular User"],
  }

  const pageHeaders = {
    [`/spaced/${role}/dashboard`]: ["DASHBOARD", Grip],
    [`/spaced/${role}/projects`]: ["PROJECTS", Folder],
    [`/spaced/${role}/tasks`]: ["TASKS", ClipboardList],
    [`/spaced/${role}/team`]: ["TEAM", Users],
    [`/spaced/${role}/projects/${id}`]: [`PROJECT DETAILS`, Folder],
  }

  const Icon = pageHeaders[location.pathname][1];

  return (
    <div className="h-14 flex items-center justify-between px-4 border-b">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 flex items-center justify-center rounded-md bg-fair">
          <Icon size="16" />
        </div>
        <p className="font-bold text-dark">{pageHeaders[location.pathname][0]}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 flex items-center justify-center rounded-md bg-dark">
          <p className="font-medium text-white">{ loggedUser[role][0] }</p>
        </div>
        <p>{ loggedUser[role][1] }</p>
      </div>
    </div>
  )
}