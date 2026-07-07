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
    <div className="flex items-center justify-between p-2 border rounded-md mb-2">
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

      <div className="flex items-center gap-1">
        {
          showSearch && (
            <Input placeholder="Search task..." icon={Search} value={searchValue} onChange={onSearchChange} />
          )
        }
        {
          showFilters.includes('status') && (
            <Select placeholder="Status" options={statusOptions} value={statusValue} onChange={onStatusChange} />
          )
        }
        {
          showFilters.includes('priority') && (
            <Select placeholder="Priority" options={priorityOptions} value={priorityValue} onChange={onPriorityChange} />
          )
        }
        {
          showFilters.includes('assignee') && (
            <Select placeholder="Assignee" options={assigneeOptions(employeeList)} value={assigneeValue} onChange={onAssigneeChange} />
          )
        }
        {
          showFilters.includes('project') && (
            <Select placeholder="Project" options={projectOptions} value={projectValue} onChange={onProjectChange} />
          )
        }

        <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair" onClick={onClearFilterClick}>
          <FunnelX size={18} />
        </div>
      </div>
    </div>
  )
}