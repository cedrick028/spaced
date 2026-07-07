import { CircularProgress } from "@mui/material";
import useEmployee from "../../hooks/useEmployee"
import Employee from "../../components/layout/employee/Employee";
import EmployeeHeader from "../../components/layout/employee header/EmployeeHeader";
import { useState } from "react";

export default function TeamPage() {
  const { employeeList, isLoading } = useEmployee();
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");

  const filteredData = employeeList.filter((employee) => {
    const firstName = employee.first_name ?? ""; //to avoid error when insert (currently undefiex so system will return an error)
    const lastName = employee.last_name ?? "";
    const searchedName = `${firstName} ${lastName}`.toLowerCase().includes(search.toLowerCase());
    const searchedPosition = !position || employee.position.toLowerCase() === position.toLowerCase();
    const searchedDepartment = !department || employee.department.toLowerCase() === department.toLowerCase();

    return searchedName && searchedPosition && searchedDepartment
  })

  const clearFilter = () => {
    setSearch("");
    setPosition("");
    setDepartment("");
  }

  return (
    <div>
      {
        isLoading ? (
          <CircularProgress size={16} />
        ) : (
          <div className="flex flex-col gap-2">
            <EmployeeHeader 
              searchValue={search} 
              onSearchChange={(e) => setSearch(e.target.value)} 
              positionValue={position} 
              onPositionChange={(e) => setPosition(e.target.value)} 
              departmentValue={department} 
              onDeparmentChange={(e) => setDepartment(e.target.value)}
              clearFilter={clearFilter}
            />
            
            <div className="h-7 flex items-center px-2 border rounded-md bg-fair">
              <p className="w-2/12 font-medium text-dark">Name</p>
              <p className="w-2/12 font-medium text-dark">ID</p>
              <p className="w-3/12 font-medium text-dark">Email</p>
              <p className="w-2/12 font-medium text-dark">Position</p>
              <p className="w-2/12 font-medium text-dark">Department</p>
              <p className="w-1/12 font-medium text-dark">Role</p>
            </div>
            
            {
              filteredData.map((employee, index) => (
                <Employee
                  key={employee.id ?? `${employee.first_name ?? "employee"}-${employee.last_name ?? "row"}-${index}`}
                  fName={employee.first_name}
                  lName={employee.last_name}
                  id={employee.id}
                  email={employee.email}
                  position={employee.position}
                  department={employee.department}
                  role={employee.role}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}