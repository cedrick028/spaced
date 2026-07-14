/* eslint-disable react/prop-types */
import { Folder, StickyNotes } from "lucide-react";
import { trimId } from "../../../utils/idFormatter";
import StateBadge from "../badge/StateBadge";
import { formatDate } from "../../../utils/dateFormatter";
import { Link } from "react-router-dom";
import Favorite from "../../UI/favorite/Favorite";

export default function Project({ projectName, id, isFavorite, taskCount, state, date }) {

  return (
    <div className="rounded-md border cursor-pointer hover:bg-shade">
      <Link to={id} className="flex flex-col gap-3 p-3 md:flex-row md:items-center md:p-2">
        <div className="flex items-center gap-3 md:w-12 md:justify-center">
          <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
            <Folder size={16} />
          </div>
        </div>

        <div className="grid gap-2 md:flex md:flex-1 md:items-center md:gap-0">
          <div className="flex items-center justify-between gap-3 md:w-28">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 md:hidden">ID</span>
            <p className="text-dark">ID: { trimId(id, '-', [0]) }</p>
          </div>

          <div className="flex items-center justify-between gap-3 md:w-28">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 md:hidden">Created</span>
            <p className="text-dark">{ formatDate(date, 'date') }</p>
          </div>

          <div className="flex items-center justify-between gap-3 md:flex-1">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 md:hidden">Project</span>
            <div className="flex items-center gap-2">
              <p>{ projectName }</p>
              <div className="flex items-center gap-1">
                <p>{ taskCount }</p>
                <StickyNotes size={16} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 md:w-24">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 md:hidden">State</span>
            <div className="w-fit">
              <StateBadge state={state} />
            </div>
          </div>
        </div>

        <div className="flex justify-end md:w-12 md:justify-center">
          <div className="w-7 h-7 flex items-center justify-center border rounded-md">
            <Favorite isFavorite={isFavorite} id={id} table="projects" />
          </div>
        </div>
      </Link>
    </div>
  )
}