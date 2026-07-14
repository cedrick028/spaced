/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { assigneeOptions, priorityOptions, statusOptions } from "../../../../config/selectConfig";
import useEmployee from "../../../../hooks/useEmployee";
import useTask from "../../../../hooks/useTask";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Select from "../../select/Select";

export default function UpdateTask({ closeModal, selectedTaskId }) {
  const { employeeList } = useEmployee();
  const { isLoading, taskList, updateTask } = useTask();
  const task = taskList.find((item) => item.id === selectedTaskId);

  const [updateData, setUpdateData] = useState({
    task_name: task?.task_name ?? "",
    assignee: task?.assignee_id ?? "",
    status: task?.status ?? "",
    priority: task?.priority ?? "",
    description: task?.description ?? "",
    project: task?.project_id ?? ""
  });

  useEffect(() => {
    if (!task) {
      return;
    }

    setUpdateData({
      task_name: task.task_name ?? "",
      assignee: task.assignee_id ?? "",
      status: task.status ?? "",
      priority: task.priority ?? "",
      description: task.description ?? "",
      project: task.project_id ?? ""
    });
  }, [task]);

  const handleUpdate = async () => {
    if (!task) {
      return;
    }

    await updateTask(task.id, updateData);
    closeModal();
  };

  return (
    <div className="min-w-lg flex flex-col gap-4">
      <div className="px-4 mt-4">
        <Input
          placeholder="Task name"
          className="!w-full"
          value={updateData.task_name}
          onChange={(e) => setUpdateData({ ...updateData, task_name: e.target.value })}
        />
      </div>

      <div className="flex items-center px-4 gap-2">
        <div className="flex-1">
          <Select
            placeholder="Assignee"
            options={assigneeOptions(employeeList)}
            value={updateData.assignee}
            onChange={(e) => setUpdateData({ ...updateData, assignee: e.target.value })}
          />
        </div>
        <div>
          <Select
            placeholder="Status"
            options={statusOptions}
            value={updateData.status}
            onChange={(e) => setUpdateData({ ...updateData, status: e.target.value })}
          />
        </div>
        <div>
          <Select
            placeholder="Priority"
            options={priorityOptions}
            value={updateData.priority}
            onChange={(e) => setUpdateData({ ...updateData, priority: e.target.value })}
          />
        </div>
      </div>

      <div className="px-4">
        <div className="p-2 border rounded-md">
          <textarea
            placeholder="Description..."
            className="w-full"
            value={updateData.description}
            onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-2 border-t p-4">
        {isLoading && <CircularProgress size={16} />}
        <Button variant="secondary" label="Cancel" onClick={closeModal} />
        <Button variant="primary" label="Update Task" onClick={handleUpdate} disabled={isLoading} />
      </div>
    </div>
  );
}
