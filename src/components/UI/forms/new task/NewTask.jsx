/* eslint-disable react/prop-types */
import { useState } from "react";
import { assigneeOptions, priorityOptions, statusOptions } from "../../../../config/selectConfig";
import useEmployee from "../../../../hooks/useEmployee";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Select from "../../select/Select";
import useTask from "../../../../hooks/useTask";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function NewTask({ closeModal }) {
  const { employeeList } = useEmployee();
  const { id } = useParams();
  const [newTask, setNewTask] = useState({task_name: "", assignee: "", status: "", priority: "", description: "", project: id})
  const { insertTask } = useTask();
  const [newTaskLoading, setNewTaskLoading] = useState(false)
  
  const createTask = async (data) => {
    setNewTaskLoading(true);
    try {
      await insertTask(data);
      setNewTask({task_name: "", assignee: "", status: "", priority: "", description: "", project: id})
      closeModal();
    } catch (error) {
      throw new  error
    } finally {
      setNewTaskLoading(false)
    }
  }

  return (
    <div className="min-w-lg flex flex-col gap-4">
      <div className="px-4 mt-4">
        <Input placeholder="Task name" className="!w-full" value={newTask.task_name} onChange={(e) => setNewTask({...newTask, task_name: e.target.value})} />
      </div>
      
      <div className="flex items-center px-4 gap-2">
        <div className="flex-1">
          <Select placeholder="Assignee" options={assigneeOptions(employeeList)} value={newTask.assignee} onChange={(e) => setNewTask({...newTask, assignee: e.target.value})} />
        </div>
        <div>
          <Select placeholder="Status" options={statusOptions} value={newTask.status} onChange={(e) => setNewTask({...newTask, status: e.target.value})} />
        </div>
        <div>
          <Select placeholder="Priority" options={priorityOptions} value={newTask.priority} onChange={(e) => setNewTask({...newTask, priority: e.target.value})} />
        </div>
      </div>

      <div className="px-4">
        <div className="p-2 border rounded-md">
          <textarea placeholder="Description..." className="w-full" value={newTask.description} onChange={(e) => setNewTask({...newTask, description: e.target.value})} />
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-2 border-t p-4">
        { newTaskLoading && (<CircularProgress size={16} />)}
        <Button variant="secondary" label="cancel" onClick={closeModal} />
        <Button variant="primary" label="Create Task" onClick={() => createTask(newTask)} disabled={newTaskLoading ? true : false} />
      </div>
    </div>
  )
}