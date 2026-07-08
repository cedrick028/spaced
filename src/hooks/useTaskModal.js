import { useState } from "react";

export default function useTaskModal() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [taskId, setTaskId] = useState("")

  const openTaskModal = (id) => {
    setIsTaskModalOpen(true)
    setTaskId(id)
  }

  const closeTaskModal = () => {
    setIsTaskModalOpen(false)
  }

  return { isTaskModalOpen, openTaskModal, closeTaskModal, taskId }
}