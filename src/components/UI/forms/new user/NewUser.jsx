/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Select from "../../select/Select";
import { useState } from "react";
import { departmentOptions, positionOptions } from "../../../../config/selectConfig";
import useEmployee from "../../../../hooks/useEmployee";

export default function NewUser({ closeModal }) {
  const { insertEmployee, isLoading } = useEmployee();
  const [newUser, setNewUser] = useState({first_name: "", last_name: "", email: "", position: "", department: "", role: "regular"})

  const createUsesr = async (data) => {
    await insertEmployee(data)
    setNewUser({first_name: "", last_name: "", email: "", position: "", department: "", role: "regular"})
    closeModal();
  }
  return (
    <div className="min-w-lg flex flex-col gap-4">
      <div className="flex gap-2 items-center px-4 pt-4">
        <Input placeholder="First name" value={newUser.first_name} onChange={(e) => setNewUser({...newUser, first_name: e.target.value})} className="w-full" />
        <Input placeholder="Last name" value={newUser.last_name} onChange={(e) => setNewUser({...newUser, last_name: e.target.value})} className="w-full" />
      </div>

      <div className="flex gap-2 px-4">
        <Input placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
        <Select placeholder="Position" options={positionOptions} value={newUser.position} onChange={(e) => setNewUser({...newUser, position: e.target.value})} />
        <Select placeholder="Department" options={departmentOptions} value={newUser.department} onChange={(e) => setNewUser({...newUser, department: e.target.value})} />
      </div>

      <div className="flex items-center justify-end gap-2 p-4 border-t">
        { isLoading && <CircularProgress size={16} /> }
        <Button label="Cancel" variant="secondary" onClick={closeModal} />
        <Button label="Create User" variant="primary" onClick={() => createUsesr(newUser)} disabled={isLoading} />
      </div>
    </div>
  )
}