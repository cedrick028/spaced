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
    <div className="flex flex-col gap-3 rounded-md border p-2 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <Input placeholder="Search name..." icon={Search} value={searchValue} onChange={onSearchChange} className="sm:w-[250px]" />
        <Button label="New User" variant="primary" onClick={openModal} className="w-full sm:w-auto" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <Select placeholder="Position" options={positionOptions} value={positionValue} onChange={onPositionChange} className="sm:w-[180px]" />
        <Select placeholder="Department" options={departmentOptions} value={departmentValue} onChange={onDeparmentChange} className="sm:w-[180px]" />
        <div className="w-7 h-7 flex items-center justify-center self-start rounded-md border bg-fair sm:self-auto" onClick={clearFilter}>
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