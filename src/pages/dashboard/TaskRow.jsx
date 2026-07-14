import { StickyNote } from "lucide-react";
import StatusBadge from "../../components/layout/badge/StatusBadge";
import { trimId } from "../../utils/idFormatter";
import { generateIcon } from "../../utils/iconFormatter";

/* eslint-disable react/prop-types */
export default function TaskRow({ status, list }) {
  return (
    <div>
      <div className="flex flex-col gap-2 rounded-md border bg-fair p-2 lg:flex-row lg:gap-2">
        <div className="h-7 w-fit flex items-center rounded-md border bg-white px-2">
          <StatusBadge data={status} />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {
            list.map((data) => (
              <div key={data.id} className="flex flex-col gap-3 rounded-md border bg-white p-2 md:flex-row md:items-center md:gap-2">
                <div className="flex items-center gap-3 md:w-12 md:justify-center">
                  <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
                    <StickyNote size={16} />
                  </div>
                </div>
        
                <p className="md:w-28">ID: {trimId(data.id, '-', 0)}</p>
        
                <div className="flex items-center gap-2 md:w-40">
                  <div className="h-7 w-7 flex items-center justify-center border rounded-md bg-fair">
                    <p className="text-dark font-medium">{ generateIcon(data.assignee.split(" ")[0], data.assignee.split(" ")[1]) }</p>
                  </div>
                  <p>{ data.assignee }</p>
                </div>
        
                <p className="md:w-72">{ data.task_name }</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}