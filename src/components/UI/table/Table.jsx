import { StickyNotes } from "lucide-react";
import { formatDate } from "../../../utils/dateFormatter";
import { trimId } from "../../../utils/idFormatter";
import { formatString } from "../../../utils/upperCasedFirstLetter";
import TableHeader from "./TableHeader";
import { useState } from "react";
import { setStatusBadge } from "../../../utils/statusBadge";
import PriorityBadge from "../../layout/badge/PriorityBadge";

/* eslint-disable react/prop-types */
export default function Table({ tableCols, dataSource, displayHeader = false, enableSearch = false, enableFilters = [] }) {

  const [search, setSearch] = useState("");
  const [statusSelect, setStatusSelect] = useState("")
  const [prioritySelect, setPrioritySelect] = useState("")
  const [assigneeSelect, setAssigneeSelect] = useState("")
  const [projectSelect, setProjectSelect] = useState("")

  const searchData = dataSource.filter((d) => {
    const filteredSearch = d.task_name.toLowerCase().includes(search.toLowerCase())
    const filteredStatus = !statusSelect || d.status.toLowerCase() === statusSelect.toLowerCase();
    const filteredPriority = !prioritySelect || d.priority.toLowerCase() === prioritySelect.toLowerCase();
    const filteredAssignee = !assigneeSelect || d.assignee.toLowerCase() === assigneeSelect.toLowerCase();
    const filteredProject = !projectSelect || d.project.toLowerCase() === projectSelect.toLowerCase();

    return filteredSearch && filteredStatus && filteredPriority && filteredAssignee && filteredProject
  })

  const clearFilter = () => {
    setSearch("")
    setStatusSelect("")
    setPrioritySelect("")
    setAssigneeSelect("")
    setProjectSelect("")
  }

  const formatData = (col, data) => {
    switch (col.toLowerCase()) {
      case "id" :
        return trimId(data, '-', 0)
      
      case "due_date" :
        return formatDate(data, 'date', 'medium')

      case "priority" :
        return <PriorityBadge data={data} />

      case "status" :
        return setStatusBadge(data);

      default :
       return formatString(data)
    }
  }

  return (
    <div className="p-2 border rounded-md">
      {
        displayHeader && (
          <TableHeader 
            title="Task List" 
            count={searchData.length} 
            icon={StickyNotes} 
            searchValue={search} 
            onSearchChange={(e) => setSearch(e.target.value)} 
            statusValue={statusSelect} 
            onStatusChange={(e) => setStatusSelect(e.target.value)}
            priorityValue={prioritySelect}
            onPriorityChange={(e) => setPrioritySelect(e.target.value)}
            assigneeValue={assigneeSelect}
            onAssigneeChange={(e) => setAssigneeSelect(e.target.value)}
            projectValue={projectSelect}
            onProjectChange={(e) => setProjectSelect(e.target.value)}

            onClearFilterClick={clearFilter}
            showSearch={enableSearch}
            showFilters={enableFilters}
          />
        )
      }
      
      <div className="border rounded-md overflow-hidden">
        <table className="w-full table-auto">
          <thead className="h-7 border-b bg-fair">
            <tr>
              {
                tableCols.map((col) => (
                  <th key={col.dbCol} className="text-dark text-left px-2">{ col.label }</th>
                ))
              }
            </tr>
          </thead>

          <tbody className="divide-y">
            {
              searchData.map((data) => (
                <tr key={data.id} className="divide-x">
                  {
                    tableCols.map((cols) => (
                      <td key={cols.dbCol} className="px-2 py-1 truncate">
                        { 
                          formatData(cols.dbCol, data[cols.dbCol])
                        }
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}