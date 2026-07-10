/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import StateBadge from "../../components/layout/badge/StateBadge";
import Button from "../../components/UI/button/Button";
import Table from "../../components/UI/table/Table";
import { tasktableColumns } from "../../config/tableConfig";
import useTask from "../../hooks/useTask";
import { formatDate } from "../../utils/dateFormatter";
import { Calendar, Folder, StickyNotePlus, User } from "lucide-react";
import Favorite from "../../components/UI/favorite/Favorite";
import NewTask from "../../components/UI/forms/new task/NewTask";
import Modal from "../../components/UI/modal/Modal";
import useModal from "../../hooks/useModal";
import emptyImg from "../../assets/empty.png"
import useProject from "../../hooks/useProject";
import { useNavigate } from "react-router-dom";

export default function ProjectContent({ id, createdAt, projectName, description, state, isFavorite }) {
  const { taskList, isLoading, deleteTasksByProjectName } = useTask();
  const tasksUnderProject = taskList.filter((task) => task.project.toLowerCase() === projectName.toLowerCase())
  const { isModalOpen, openModal, closeModal } = useModal();
  const { deleteProject } = useProject();
  const navigate = useNavigate();

  const handleDelete = async () => {
    deleteTasksByProjectName(projectName);
    navigate("/spaced/admin/projects")
    await deleteProject(id)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="font-bold text-[15px] text-dark">{ projectName }</p>
          <StateBadge state={state} />
          <Favorite isFavorite={isFavorite} id={id} table="projects" />
        </div>
        <div className="flex gap-2">
          <Button label="New Task" variant="primary" onClick={openModal} />
        </div>
      </div>


      <div className="my-4">
        <p className="flex items-center gap-2"><Folder size={16} /><span>{id}</span></p>
        <p className="flex items-center gap-2"><Calendar size={16} /><span>{formatDate(createdAt, "date")}</span></p>
        <p className="flex items-center gap-2"><User size={16} className="-mt-0.5" /><span>Admin</span></p>
        <div className="p-2 border border-dashed rounded-md mt-2">
          <p className="font-medium text-dark">Description:</p>
          <p>{ description }</p>
        </div>
      </div>

      {
        isLoading ? (
          <CircularProgress size={16} />
        ) : (
          tasksUnderProject.length !== 0 ? (
            <Table tableCols={tasktableColumns} dataSource={tasksUnderProject} displayHeader={true} enableSearch={true} enableFilters={["status", "priority"]} />
          ) : (
            <div className="flex flex-col items-center justify-center p-4 rounded-md bg-fair">
              <img src={emptyImg} />
              <p className="text-center">No task available in this project.</p>
            </div>
          )
        )
      }

      <div className="flex justify-end gap-2 mt-4">
        <Button label="Delete" variant="delete" onClick={handleDelete} />
        <Button label="Update" variant="secondary" />
      </div>

      {
        isModalOpen && (
          <Modal icon={StickyNotePlus} label="New Task" closeModal={closeModal}>
            <NewTask closeModal={closeModal} />
          </Modal>
        )
      }
    </div>
  )
}