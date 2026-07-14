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

  const activePageHeader = pageHeaders[location.pathname] ?? pageHeaders[`/spaced/${role}/dashboard`];
  const Icon = activePageHeader[1];

  return (
    <div className="flex min-h-14 flex-col gap-3 border-b px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 flex items-center justify-center rounded-md bg-fair">
          <Icon size="16" />
        </div>
        <p className="font-bold text-dark">{activePageHeader[0]}</p>
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