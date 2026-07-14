/* eslint-disable react/prop-types */

import { Calendar, Folder, StickyNote, X } from "lucide-react";
import useModal from "../../../hooks/useModal";
import useTask from "../../../hooks/useTask";
import { formatDate } from "../../../utils/dateFormatter";
import { generateIcon } from "../../../utils/iconFormatter";
import Button from "../button/Button";
import UpdateTask from "../forms/update task/UpdateTask";
import Modal from "./Modal";
import StatusBadge from "../../layout/badge/StatusBadge";
import PriorityBadge from "../../layout/badge/PriorityBadge";

export default function TaskModal({ closeTaskModal, taskId }) {
  const { taskList, deleteTask } = useTask();
  const { isModalOpen, openModal, closeModal } = useModal();
  const displayTask = taskList.find((task) => task.id === taskId); 

  const handleDelete = async () => {
    closeTaskModal();
    await deleteTask(displayTask.id)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm" onClick={closeTaskModal}>
      <div className="w-[min(92vw,56rem)] rounded-md bg-white shadow-2xl ring-1 ring-gray-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair">
              <StickyNote size={16} />
            </div>
            <p className="text-[15px] font-bold text-dark mt-0.5">{ displayTask.task_name }</p>
            <div className="w-7 h-7 flex items-center justify-center rounded-md bg-dark sm:ml-4">
              <p className="font-bold text-white">{ generateIcon(displayTask.assignee.split(" ")[0], displayTask.assignee.split(" ")[1]) }</p>
            </div>
          </div>
          <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair cursor-pointer" onClick={closeTaskModal}>
            <X size={16} />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 pt-4 lg:flex-row lg:justify-between">
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

          <div className="flex flex-wrap gap-2">
            <div className="h-7 flex items-center gap-2 rounded-md border px-2">
              <StatusBadge data={displayTask.status} />
            </div>
            <div className="h-7 flex items-center rounded-md border px-2">
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
          <Button label="Update" variant="secondary" onClick={openModal} />
        </div>
        
      </div>

      {
        isModalOpen && (
          <Modal icon={StickyNote} label="Update Task" closeModal={closeModal}>
            <UpdateTask closeModal={() => {
              closeModal();
              closeTaskModal();
            }} selectedTaskId={taskId} />
          </Modal>
        )
      }
    </div>
  )
}