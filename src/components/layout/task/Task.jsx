/* eslint-disable react/prop-types */
import { StickyNote } from "lucide-react";
import { trimId } from "../../../utils/idFormatter";
import { generateIcon } from "../../../utils/iconFormatter";
import Favorite from "../../UI/favorite/Favorite";

export default function Task({ id, assignee, assigneeFN, assigneeLN, taskName, isFavorite }) {
  return (
    <div className="flex items-center justify-between p-2 border rounded-md cursor-pointer hover:bg-shade">
      <div className="flex items-center">
        <div className="w-12">
          <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
            <StickyNote size={16} />
          </div>
        </div>

        <p className="w-28">ID: {trimId(id, '-', 0)}</p>

        <div className="w-40 flex items-center gap-2">
          <div className="h-7 w-7 flex items-center justify-center border rounded-md bg-fair">
            <p className="text-dark font-medium">{ generateIcon(assigneeFN, assigneeLN) }</p>
          </div>
          <p>{ assignee }</p>
        </div>

        <p className="w-72">{ taskName }</p>
      </div>
      

      <div className="w-12 flex justify-center">
        <div className="w-7 h-7 flex items-center justify-center border rounded-md">
          <Favorite isFavorite={isFavorite} id={id} table="tasks" />
        </div>
      </div>
    </div>
  )
}