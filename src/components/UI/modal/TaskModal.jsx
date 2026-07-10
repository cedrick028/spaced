/* eslint-disable react/prop-types */

import { Calendar, Folder, StickyNote, X } from "lucide-react";
import useTask from "../../../hooks/useTask";
import { formatDate } from "../../../utils/dateFormatter";
import { generateIcon } from "../../../utils/iconFormatter";
import Button from "../button/Button";
import StatusBadge from "../../layout/badge/StatusBadge";
import PriorityBadge from "../../layout/badge/PriorityBadge";

export default function TaskModal({ closeTaskModal, taskId }) {
  const { taskList, deleteTask } = useTask();
  const displayTask = taskList.find((task) => task.id === taskId); 

  const handleDelete = async () => {
    closeTaskModal();
    await deleteTask(displayTask.id)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm" onClick={closeTaskModal}>
      <div className="w-4/12 rounded-md bg-white shadow-2xl ring-1 ring-gray-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
              <StickyNote size={16} />
            </div>
            <p className="text-[15px] font-bold text-dark mt-0.5">{ displayTask.task_name }</p>
            <div className="w-7 h-7 flex items-center justify-center ml-4 rounded-md bg-dark">
              <p className="font-bold text-white">{ generateIcon(displayTask.assignee.split(" ")[0], displayTask.assignee.split(" ")[1]) }</p>
            </div>
          </div>
          <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair cursor-pointer" onClick={closeTaskModal}>
            <X size={16} />
          </div>
        </div>
        <div className="flex justify-between px-4 pt-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <StickyNote size={16} />
              <p>{ displayTask.task_name }</p>
            </div>
            <div className="flex items-center gap-2">
              <Folder size={16} />
              <p>{ displayTask.project }</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <p>{ formatDate(displayTask.due_date, "date") }</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="h-7 flex items-center gap-2 px-2 border rounded-md">
              <StatusBadge data={displayTask.status} />
            </div>
            <div className="h-7 flex items-center px-2 border rounded-md">
              <PriorityBadge data={displayTask.priority} />
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="p-2 border border-dashed rounded-md">
            <p className="font-medium text-dark">Description:</p>
            <p>{displayTask.description}</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t">
          <Button label="Delete" variant="delete" onClick={handleDelete} />
          <Button label="Update" variant="secondary" />
        </div>
        
      </div>
    </div>
  )
}