import { FunnelX, Search } from "lucide-react";
import Input from "../input/Input";
import Select from "../select/Select";
import { assigneeOptions, priorityOptions, statusOptions } from "../../../config/selectConfig";
import useEmployee from "../../../hooks/useEmployee";
import useProject from "../../../hooks/useProject";

/* eslint-disable react/prop-types */
export default function TableHeader({ 
  icon: Icon, 
  title, 
  count, 
  onSearchChange, 
  onClearFilterClick, 
  searchValue, 
  statusValue, 
  onStatusChange, 
  priorityValue, 
  onPriorityChange,
  assigneeValue,
  onAssigneeChange,
  projectValue,
  onProjectChange,
  showSearch,
  showFilters
}) {

  const { employeeList } = useEmployee();
  const { projectList } = useProject();

  

  const projectOptions = projectList.map((project) => ({
    label: project.project_name,
    value: project.project_name
  }))

  return (
    <div className="mb-2 flex flex-col gap-3 rounded-md border p-2 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex items-center gap-1">
        <div className="h-7 border border-dark border-l-4"></div>
        <div className="h-7 flex items-center px-4 bg-fair rounded-e-md">
          <p className="text-dark font-medium">{ title }</p>
        </div>
        <div className="h-7 flex items-center gap-1 ml-1">
          <p className="text-dark font-medium">{ count }</p>
          <Icon size={16} />
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {
          showSearch && (
            <Input placeholder="Search task..." icon={Search} value={searchValue} onChange={onSearchChange} className="sm:w-[250px]" />
          )
        }
        {
          showFilters.includes('status') && (
            <Select placeholder="Status" options={statusOptions} value={statusValue} onChange={onStatusChange} className="sm:w-[160px]" />
          )
        }
        {
          showFilters.includes('priority') && (
            <Select placeholder="Priority" options={priorityOptions} value={priorityValue} onChange={onPriorityChange} className="sm:w-[160px]" />
          )
        }
        {
          showFilters.includes('assignee') && (
            <Select placeholder="Assignee" options={assigneeOptions(employeeList)} value={assigneeValue} onChange={onAssigneeChange} className="sm:w-[180px]" />
          )
        }
        {
          showFilters.includes('project') && (
            <Select placeholder="Project" options={projectOptions} value={projectValue} onChange={onProjectChange} className="sm:w-[180px]" />
          )
        }

        <div className="w-7 h-7 flex items-center justify-center self-start rounded-md border bg-fair sm:self-auto" onClick={onClearFilterClick}>
          <FunnelX size={18} />
        </div>
      </div>
    </div>
  )
}