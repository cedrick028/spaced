import { StickyNote } from "lucide-react";
import StatusBadge from "../../components/layout/badge/StatusBadge";
import { trimId } from "../../utils/idFormatter";
import { generateIcon } from "../../utils/iconFormatter";

/* eslint-disable react/prop-types */
export default function TaskRow({ status, list }) {
  return (
    <div>
      <div className="flex gap-2 p-2 border rounded-md bg-fair">
        <div className="w-28  h-7 flex items-center px-2 border rounded-md bg-white">
          <StatusBadge data={status} />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {
            list.map((data) => (
              <div key={data.id} className="flex items-center gap-2 p-2 border rounded-md bg-white">
                <div className="w-12">
                  <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
                    <StickyNote size={16} />
                  </div>
                </div>
        
                <p className="w-28">ID: {trimId(data.id, '-', 0)}</p>
        
                <div className="w-40 flex items-center gap-2">
                  <div className="h-7 w-7 flex items-center justify-center border rounded-md bg-fair">
                    <p className="text-dark font-medium">{ generateIcon(data.assignee.split(" ")[0], data.assignee.split(" ")[1]) }</p>
                  </div>
                  <p>{ data.assignee }</p>
                </div>
        
                <p className="w-72">{ data.task_name }</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}