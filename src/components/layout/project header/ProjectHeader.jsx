/* eslint-disable react/prop-types */
import { FolderPlus, FunnelX, Search } from "lucide-react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import Select from "../../UI/select/Select";
import { stateOptions } from "../../../config/selectConfig";
import useProject from "../../../hooks/useProject";
import useModal from "../../../hooks/useModal";
import Modal from "../../UI/modal/Modal";
import NewProject from "../../UI/forms/new project/NewProject";


export default function ProjectHeader({ value, onSearchChange, showFavorite, showAll, variantFavorite, variantAll, clearFilter, onSelectState, stateValue }) {

  const { projectList } = useProject();
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <div className="mb-2 flex flex-col gap-3 rounded-md border p-2 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <Button label={`All (${projectList.length})`} variant={variantAll} onClick={showAll} className="w-full sm:w-auto" />
        <Button label="Favorites" variant={variantFavorite} onClick={showFavorite} className="w-full sm:w-auto" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <Input placeholder="Search project..." icon={Search} value={value} onChange={onSearchChange} className="sm:w-[250px]" />
        <Select placeholder="State" value={stateValue} options={stateOptions} onChange={onSelectState} className="sm:w-[180px]" />
        <div className="w-7 h-7 flex items-center justify-center self-start rounded-md border bg-fair sm:self-auto" onClick={clearFilter}>
          <FunnelX size={16} />
        </div>
        <p className="hidden sm:block">|</p>
        <Button label="New Project" variant="primary" onClick={openModal} className="w-full sm:w-auto" />
      </div>

      {
        isModalOpen && (
          <Modal label="New Project" icon={FolderPlus} closeModal={closeModal}>
            <NewProject closeModal={closeModal} />
          </Modal>
        )
      }
    </div>
  )
}