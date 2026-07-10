/* eslint-disable react/prop-types */
import { Folder, StickyNotes } from "lucide-react";
import { trimId } from "../../../utils/idFormatter";
import StateBadge from "../badge/StateBadge";
import { formatDate } from "../../../utils/dateFormatter";
import { Link } from "react-router-dom";
import Favorite from "../../UI/favorite/Favorite";

export default function Project({ projectName, id, isFavorite, taskCount, state, date }) {

  return (
    <div className="flex items-center p-2 border rounded-md cursor-pointer hover:bg-shade">
      <Link to={id} className="w-full flex items-center">
        <div className="w-12">
          <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
            <Folder size={16} />
          </div>
        </div>
      
        <p className="w-28">ID: { trimId(id, '-', [0]) }</p>
        <p className="w-28">{ formatDate(date, 'date') }</p>

        <div className="flex-1 flex items-center gap-2">  
          <p>{ projectName }</p>
          <div className="flex items-center gap-1">
            <p>{ taskCount }</p>
            <StickyNotes size={16} />
          </div>
        </div>

        <div className="w-24">
          <div className="w-fit">
            <StateBadge state={state} />
          </div>
        </div>
      </Link>

      <div className="w-12 flex justify-center">
        <div className="w-7 h-7 flex items-center justify-center border rounded-md">
          <Favorite isFavorite={isFavorite} id={id} table="projects" />
        </div>
      </div>
    </div>
  )
}