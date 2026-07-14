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
    <div className="mb-2 flex flex-col gap-3 rounded-md border p-2 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <Button label={`All (${taskList.length})`} variant={variantAll} onClick={showAll} className="w-full sm:w-auto" />
        <Button label="Favorites" variant={variantFavorite} onClick={showFavorite} className="w-full sm:w-auto" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <Input placeholder="Search task..." icon={Search} value={value} onChange={onSearchChange} className="sm:w-[250px]" />
        <Select placeholder="Assignee" options={assigneeOptions(employeeList)} value={assigneeValue} onChange={onAssigneeChange} className="sm:w-[180px]" />
        <Select placeholder="Status" options={statusOptions} value={statusValue} onChange={onStatusChange} className="sm:w-[160px]" />
        <Select placeholder="Priority" options={priorityOptions} value={priorityValue} onChange={onPriorityChange} className="sm:w-[160px]" />
        <div className="w-7 h-7 flex items-center justify-center self-start rounded-md border bg-fair sm:self-auto" onClick={onClearFilter}>
          <FunnelX size={16} />
        </div>
      </div>
    </div>
  )
}