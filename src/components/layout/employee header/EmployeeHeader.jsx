/* eslint-disable react/prop-types */
import { FunnelX, Search, UserPlus } from "lucide-react";
import Input from "../../UI/input/Input";
import Select from "../../UI/select/Select";
import { departmentOptions, positionOptions } from "../../../config/selectConfig";
import Button from "../../UI/button/Button";
import useModal from "../../../hooks/useModal";
import Modal from "../../UI/modal/Modal";
import NewUser from "../../UI/forms/new user/NewUser";

export default function EmployeeHeader({ searchValue, onSearchChange, positionValue, onPositionChange, departmentValue, onDeparmentChange, clearFilter }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="flex items-center justify-between p-2 border rounded-md">
      <div className="flex items-center gap-2">
        <Input placeholder="Search name..." icon={Search} value={searchValue} onChange={onSearchChange} />
        <Button label="New User" variant="primary" onClick={openModal} />
      </div>
      <div className="flex items-center gap-2">
        <Select placeholder="Position" options={positionOptions} value={positionValue} onChange={onPositionChange} />
        <Select placeholder="Department" options={departmentOptions} value={departmentValue} onChange={onDeparmentChange} />
        <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair" onClick={clearFilter}>
          <FunnelX size={16} />
        </div>
      </div>

      {
        isModalOpen && (
          <Modal label="New User" icon={UserPlus} closeModal={closeModal}>
            <NewUser closeModal={closeModal} />
          </Modal>
        )
      }
    </div>
  )
}