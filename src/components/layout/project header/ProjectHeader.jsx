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
    <div className="flex items-center justify-between p-2 border rounded-md mb-2">
      <div className="flex items-center gap-2">
        <Button label={`All (${projectList.length})`} variant={variantAll} onClick={showAll} />
        <Button label="Favorites" variant={variantFavorite} onClick={showFavorite} />
      </div>
      <div className="flex items-center gap-2">
        <Input placeholder="Search project..." icon={Search} value={value} onChange={onSearchChange} />
        <Select placeholder="State" value={stateValue} options={stateOptions} onChange={onSelectState} />
        <div className="w-7 h-7 flex items-center justify-center border rounded-md bg-fair" onClick={clearFilter}>
          <FunnelX size={16} />
        </div>
        <p>|</p>
        <Button label="New Project" variant="primary" onClick={openModal} />
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