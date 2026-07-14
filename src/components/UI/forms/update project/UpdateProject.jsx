/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { stateOptions } from "../../../../config/selectConfig";
import useProject from "../../../../hooks/useProject";
import useTask from "../../../../hooks/useTask";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Select from "../../select/Select";

export default function UpdateProject({ closeModal, selectedProjectId }) {
  const { isLoading, projectList, updateProject } = useProject();
  const { fetchTask } = useTask();
  const project = projectList.find((proj) => proj.id === selectedProjectId);

  const [updateData, setUpdateData] = useState({
    project_name: project?.project_name ?? "",
    state: project?.state ?? "",
    description: project?.description ?? ""
  });

  const handleUpdate = async () => {
    if (!project) {
      return;
    }

    await updateProject(project.id, updateData);
    await fetchTask();
    closeModal();
  };

  return (
    <div className="min-w-lg flex flex-col gap-4">
      <div className="flex gap-2 items-center px-4 pt-4">
        <Input
          placeholder="Project name"
          value={updateData.project_name}
          onChange={(e) => setUpdateData({ ...updateData, project_name: e.target.value })}
        />
        <Select
          placeholder="State"
          options={stateOptions}
          value={updateData.state}
          onChange={(e) => setUpdateData({ ...updateData, state: e.target.value })}
        />
      </div>

      <div className="px-4">
        <div className="p-2 border rounded-md">
          <textarea
            placeholder="Description..."
            className="w-full"
            value={updateData.description}
            onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 p-4 border-t">
        {isLoading && <CircularProgress size={16} />}
        <Button label="Cancel" variant="secondary" onClick={closeModal} />
        <Button label="Update Project" variant="primary" onClick={handleUpdate} disabled={isLoading} />
      </div>
    </div>
  );
}
