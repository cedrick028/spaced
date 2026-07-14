import useProject from "../../hooks/useProject"
import { CircularProgress } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectContent from "./ProjectContent";

export default function ProjectDetails() {
  const { id, role } = useParams();
  const navigate = useNavigate();
  const { projectList, isLoading } = useProject();
  const project = projectList.find((proj) => proj.id === id)

  return (
    <div>
      {
        isLoading ? (
          <CircularProgress size={16} />
        ) : (
          <>
            <div className="min-h-7 flex flex-wrap items-center gap-2 rounded-md border bg-fair px-2 py-1 mb-4">
              <div className="bg-white border rounded-md">
                <ChevronLeft size={16} className="cursor-pointer" onClick={() => navigate(`/spaced/${role}/projects`)} />
              </div>
              <p>{project?.project_name}</p>
            </div>
            {
              !project ? (
                <p className="text-sm text-gray-500">Project not found.</p>
              ) : (
                <ProjectContent 
                  id={project.id} 
                  createdAt={project.created_at} 
                  projectName={project.project_name} 
                  description={project.description} 
                  state={project.state} 
                  isFavorite={project.isFavorite} 
                />
              )
            }
            
          </>
        )
      }
    </div>
  )
}