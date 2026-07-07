/* eslint-disable react/prop-types */
import { Star } from "lucide-react";
import useTask from "../../../hooks/useTask";
import useProject from "../../../hooks/useProject";

export default function Favorite({ isFavorite, id, table }) {
  const { updateTaskFavorite } = useTask()
  const { updateProjectFavorite } = useProject();

  const handleSubmit = async (id, table) => {
    switch (table) {
      case "tasks" :
        return await updateTaskFavorite(id, table, isFavorite)

      case "projects" :
        return await updateProjectFavorite(id, table, isFavorite)

      default :
        return null
    }
    
  }
  return (
    <div>
      <Star size={16} fill={isFavorite ? "#FFEA00" : "white"} stroke={isFavorite ? "#FFEA00" : "#6B7280"} onClick={() => handleSubmit(id, table)} className="cursor-pointer" />
    </div>
  )
}