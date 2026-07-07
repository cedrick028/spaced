/* eslint-disable react/prop-types */
import { FunnelX, Search } from "lucide-react";
import Input from "../../UI/input/Input";
import Select from "../../UI/select/Select";
import { departmentOptions, positionOptions } from "../../../config/selectConfig";
import Button from "../../UI/button/Button";
import useEmployee from "../../../hooks/useEmployee";

export default function EmployeeHeader({ searchValue, onSearchChange, positionValue, onPositionChange, departmentValue, onDeparmentChange, clearFilter }) {
  const { insertEmployee } = useEmployee();

  const handleSubmit = async (data) => {
    await insertEmployee(data);
  }

  const newEmployeeData = {
    first_name: "Cedrick",
    last_name: "Bayhon",
    email: "cbayhon@spaced.com",
    position: "Fullstack Developer",
    department: "Operations",
    role: "regular",
    avatar_url: "null",
  }
  return (
    <div className="flex items-center justify-between p-2 border rounded-md">
      <div className="flex items-center gap-2">
        <Input placeholder="Search name..." icon={Search} value={searchValue} onChange={onSearchChange} />
        <Button label="New User" variant="primary" onClick={() => handleSubmit(newEmployeeData)} />
      </div>
      <div className="flex items-center gap-2">
        <Select placeholder="Position" options={positionOptions} value={positionValue} onChange={onPositionChange} />
        <Select placeholder="Department" options={departmentOptions} value={departmentValue} onChange={onDeparmentChange} />
        <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair" onClick={clearFilter}>
          <FunnelX size={16} />
        </div>
      </div>
    </div>
  )
}