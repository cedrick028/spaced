/* eslint-disable react/prop-types */
import { StickyNote } from "lucide-react";
import { trimId } from "../../../utils/idFormatter";
import { generateIcon } from "../../../utils/iconFormatter";
import Favorite from "../../UI/favorite/Favorite";

export default function Task({ id, assignee, assigneeFN, assigneeLN, taskName, isFavorite, getTask }) {

  return (
    <div className="flex flex-col gap-3 rounded-md border p-2 cursor-pointer hover:bg-shade md:grid md:grid-cols-[3rem_7rem_10rem_minmax(0,1fr)_3rem] md:items-center md:gap-2">
      <div className="flex flex-1 flex-col gap-3 md:contents" onClick={getTask}>
        <div className="flex items-center gap-3 md:justify-center">
          <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
            <StickyNote size={16} />
          </div>
        </div>

        <p className="min-w-0 md:truncate">ID: {trimId(id, '-', 0)}</p>

        <div className="flex items-center gap-2 min-w-0">
          <div className="h-7 w-7 flex items-center justify-center border rounded-md bg-fair">
            <p className="text-dark font-medium">{ generateIcon(assigneeFN, assigneeLN) }</p>
          </div>
          <p className="min-w-0 truncate">{ assignee }</p>
        </div>

        <p className="min-w-0 break-words md:truncate">{ taskName }</p>
      </div>
      

      <div className="flex justify-end md:justify-center">
        <div className="w-7 h-7 flex items-center justify-center border rounded-md">
          <Favorite isFavorite={isFavorite} id={id} table="tasks" />
        </div>
      </div>
    </div>
  )
}