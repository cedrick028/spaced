/* eslint-disable react/prop-types */
import { useState } from "react";
import { stateOptions } from "../../../../config/selectConfig";
import useProject from "../../../../hooks/useProject";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Select from "../../select/Select";
import { CircularProgress } from "@mui/material";

export default function NewProject({ closeModal }) {
  const { insertProject } = useProject();
  const [newProject, setNewProject] = useState({project_name: "", state: "", description: "", owner: "634886d4-ea77-4837-a0cd-67d572c9e480"})
  const [isNewProjectLoading, setIsNewProjectLoading] = useState(false);

  const createTask = async (data) => {
    setIsNewProjectLoading(true)
    try {
      await insertProject(data)
      setNewProject({project_name: "", state: "", description: ""})
      closeModal();
    } catch (error) {
      throw new error;
    } finally {
      setIsNewProjectLoading(false)
    }
  }

  return (
    <div className="min-w-lg flex flex-col gap-4">
      <div className="flex gap-2 items-center px-4 pt-4">
        <Input placeholder="Project name" value={newProject.project_name} onChange={(e) => setNewProject({...newProject, project_name: e.target.value})} />
        <Select placeholder="State" options={stateOptions} value={newProject.state} onChange={(e) => setNewProject({...newProject, state: e.target.value})} />
      </div>
      
      <div className="px-4">
        <div className="p-2 border rounded-md">
          <textarea placeholder="Description..." className="w-full" value={newProject.description} onChange={(e) => setNewProject({...newProject, description: e.target.value})} />
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 p-4 border-t">
        { isNewProjectLoading && <CircularProgress size={16} /> }
        <Button label="Cancel" variant="secondary" onClick={closeModal} />
        <Button label="Create Project" variant="primary" onClick={() => createTask(newProject)} disabled={isNewProjectLoading} />
      </div>
    </div>
  )
}