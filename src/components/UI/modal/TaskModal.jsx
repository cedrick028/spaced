/* eslint-disable react/prop-types */

import { Calendar, Link, StickyNote, X } from "lucide-react";
import useTask from "../../../hooks/useTask";
import { formatDate } from "../../../utils/dateFormatter";
import Select from "../select/Select";
import { priorityOptions, statusOptions } from "../../../config/selectConfig";
import { generateIcon } from "../../../utils/iconFormatter";

export default function TaskModal({ closeTaskModal, taskId }) {
  const { taskList } = useTask();
  const displayTask = taskList.find((task) => task.id === taskId); 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm" onClick={closeTaskModal}>
      <div className="w-4/12 rounded-md bg-white shadow-2xl ring-1 ring-gray-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
              <StickyNote size={16} />
            </div>
            <p className="text-[15px] font-bold text-dark mt-0.5">{ displayTask.task_name }</p>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="w-7 h-7 flex items-center justify-center rounded-md bg-dark">
              {/* <p className="font-bold text-white">{ generateIcon("john", "cedrick") }</p> */}
              <p className="font-bold text-white">{ generateIcon(displayTask.assignee.split(" ")[0], displayTask.assignee.split(" ")[1]) }</p>
            </div>
            <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair cursor-pointer" onClick={closeTaskModal}>
              <X size={16} />
            </div>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Link size={16} />
              <p>{ displayTask.project }</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <p>{ formatDate(displayTask.due_date, "date") }</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Select value={displayTask.status} placeholder={displayTask.status} options={statusOptions} onChange={(e) => (e)} />
            <Select value={displayTask.priority} placeholder={displayTask.priority} options={priorityOptions} onChange={(e) => (e)} />
          </div>
        </div>

        <div className="w-full p-4">
          <div className="p-2 border border-dashed rounded-md">
            <p className="font-medium text-dark">Description:</p>
            <p>{displayTask.description}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}