import { useState } from "react";
import TaskHeader from "../../components/layout/task header/TaskHeader";
import Task from "../../components/layout/task/Task";
import useTask from "../../hooks/useTask"
import { CircularProgress } from "@mui/material";
import useTaskModal from "../../hooks/useTaskModal";
import TaskModal from "../../components/UI/modal/TaskModal";

export default function TaskPage() {
  const { taskList, isLoading } = useTask();
  const [search, setSearch] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [variantAll, setVariantAll] = useState("primary");
  const [variantFavorite, setVariantFavorite] = useState("secondary");
  const [showFavorite, setShowFavorite] = useState(false)

  const { isTaskModalOpen, openTaskModal, closeTaskModal, taskId } = useTaskModal();

  const filteredData = taskList.filter((task) => {
    const searchedData = task.task_name.toLowerCase().includes(search.toLowerCase())
    const searchedAssignee = !assignee || task.assignee.toLowerCase() === assignee.toLowerCase();
    const searchedStatus = !status || task.status.toLowerCase() === status.toLowerCase();
    const searchedPriority = !priority || task.priority.toLowerCase() === priority.toLowerCase();
    const searchedFavorite = showFavorite ? task.isFavorite : true;

    return searchedData && searchedAssignee && searchedStatus && searchedPriority && searchedFavorite
  })

  const clearFilter = () => {
    setSearch("");
    setAssignee("");
    setStatus("");
    setPriority("");
    setVariantAll("primary");
    setVariantFavorite("secondary");
    setShowFavorite(false)
  }

  const filterFavorite = () => {
    setShowFavorite(true);
    setVariantAll("secondary");
    setVariantFavorite("primary");
  }

  const filterAll = () => {
    setShowFavorite(false);
    setVariantAll("primary");
    setVariantFavorite("secondary");
  }

  return (
    <div>
      <TaskHeader 
        value={search} 
        onSearchChange={(e) => setSearch(e.target.value)} 
        onClearFilter={clearFilter} 
        assigneeValue={assignee} 
        onAssigneeChange={(e) => setAssignee(e.target.value)} 
        statusValue={status}
        onStatusChange={(e) => setStatus(e.target.value)}
        priorityValue={priority}
        onPriorityChange={(e) => setPriority(e.target.value)}
        showFavorite={filterFavorite}
        variantFavorite={variantFavorite}
        showAll={filterAll}
        variantAll={variantAll}
      />

      {
        isLoading ? (
          <CircularProgress size={16} />
        ) : (
          <div className="flex flex-col gap-2">
            <div className="h-7 flex items-center justify-between px-2 border rounded-md bg-fair">
              <div className="flex items-center">
                <p className="w-28 ml-12 text-dark font-medium">ID</p>
                <p className="w-40 text-dark font-medium">Assignee</p>
                <p className="w-72 text-dark font-medium">Task Name</p>
              </div>
              <p className="w-12 text-dark font-medium text-center">Favorite</p>
            </div>
            {
              filteredData.map((task) => (
                <Task 
                  key={task.id} 
                  id={task.id} 
                  assignee={task.assignee} 
                  taskName={task.task_name} 
                  assigneeFN={task.assignee.split(" ")[0]} 
                  assigneeLN={task.assignee.split(" ")[1]}
                  isFavorite={task.isFavorite}
                  getTask={() => openTaskModal(task.id)}
                />
              ))
            }
          </div>
        )
      }

      {
        isTaskModalOpen && (
          <TaskModal closeTaskModal={closeTaskModal} taskId={taskId} />
        )
      }
    </div>
  )
}