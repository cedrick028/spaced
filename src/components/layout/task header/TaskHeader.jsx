/* eslint-disable react/prop-types */
import { FunnelX, Search } from "lucide-react";
import Input from "../../UI/input/Input";
import Select from "../../UI/select/Select";
import { assigneeOptions, priorityOptions, statusOptions } from "../../../config/selectConfig";
import useEmployee from "../../../hooks/useEmployee";
import Button from "../../UI/button/Button";
import useTask from "../../../hooks/useTask";

export default function TaskHeader({ value, onSearchChange, onClearFilter, assigneeValue, onAssigneeChange, statusValue, onStatusChange, priorityValue, onPriorityChange, showFavorite, variantFavorite, variantAll, showAll }) {
  const { employeeList } = useEmployee();
  const { taskList } = useTask();

  return (
    <div className="flex items-center justify-between p-2 border rounded-md mb-2">
      <div className="flex items-center gap-2">
        <Button label={`All (${taskList.length})`} variant={variantAll} onClick={showAll} />
        <Button label="Favorites" variant={variantFavorite} onClick={showFavorite} />
      </div>
      <div className="flex items-center gap-2">
        <Input placeholder="Search task..." icon={Search} value={value} onChange={onSearchChange} />
        <Select placeholder="Assignee" options={assigneeOptions(employeeList)} value={assigneeValue} onChange={onAssigneeChange} />
        <Select placeholder="Status" options={statusOptions} value={statusValue} onChange={onStatusChange} />
        <Select placeholder="Priority" options={priorityOptions} value={priorityValue} onChange={onPriorityChange} />
        <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair" onClick={onClearFilter}>
          <FunnelX size={16} />
        </div>
      </div>
    </div>
  )
}