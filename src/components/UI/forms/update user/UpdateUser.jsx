/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Select from "../../select/Select";
import useEmployee from "../../../../hooks/useEmployee";
import { useState } from "react";
import { departmentOptions, positionOptions } from "../../../../config/selectConfig";

export default function UpdateUser({ closeModal, selectedUserId }) {
  const { isLoading, employeeList, updateEmployee } = useEmployee();
  const user = employeeList.find((user) => user.id === selectedUserId)
  const [updateUser, setUpdateUser] = useState({first_name: user.first_name, last_name: user.last_name, email: user.email, position: user.position, department: user.department})

  const handleUpdate = async () => {
    try {
      await updateEmployee(user.id, updateUser)
      closeModal()
    } finally {
      console.log("ss")
    }
  }

  return (
    <div className="min-w-lg flex flex-col gap-4">
      <div className="flex gap-2 items-center px-4 pt-4">
        <Input placeholder="First name" value={updateUser.first_name} onChange={(e) => setUpdateUser({...updateUser, first_name: e.target.value})} className="w-full" />
        <Input placeholder="Last name" value={updateUser.last_name} onChange={(e) => setUpdateUser({...updateUser, last_name: e.target.value})} className="w-full" />
      </div>

      <div className="flex gap-2 px-4">
        <Input placeholder="Email" value={updateUser.email} onChange={(e) => setUpdateUser({...updateUser, email: e.target.value})} />
        <Select placeholder="Position" options={positionOptions} value={updateUser.position} onChange={(e) => setUpdateUser({...updateUser, position: e.target.value})} />
        <Select placeholder="Department" options={departmentOptions} value={updateUser.department} onChange={(e) => setUpdateUser({...updateUser, department: e.target.value})} />
      </div>

      <div className="flex items-center justify-end gap-2 p-4 border-t">
        { isLoading && <CircularProgress size={16} /> }
        <Button label="Cancel" variant="secondary" onClick={closeModal} />
        <Button label="Update User" variant="primary" onClick={handleUpdate} />
      </div>
    </div>
  )
}