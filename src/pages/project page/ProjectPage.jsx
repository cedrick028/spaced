import { useState } from "react";
import ProjectHeader from "../../components/layout/project header/ProjectHeader";
import Project from "../../components/layout/project/Project";
import useProject from "../../hooks/useProject";
import useTask from "../../hooks/useTask";
import { formatString } from "../../utils/upperCasedFirstLetter";
import { CircularProgress } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";

export default function ProjectPage() {
  const { projectList, isLoading } = useProject();
  const { taskList } = useTask();
  const { id } = useParams();
  const [searchProject, setSearchProject] = useState("");
  const [selectState, setSelectState] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [variantAll, setVariantAll] = useState("primary");
  const [variantFavorite, setVariantFavorite] = useState("secondary");

  const searchData = projectList.filter((proj) => {
    const matchesSearch = proj.project_name.toLowerCase().includes(searchProject.toLowerCase());
    const matchesFavorite = showFavorites ? proj.isFavorite : true;
    const matchesState = !selectState || proj.state.toLowerCase() === selectState.toLowerCase()

    return matchesSearch && matchesFavorite && matchesState;
  });

  const showFavoriteProjects = () => {
    setShowFavorites(true);
    setVariantFavorite("primary")
    setVariantAll("secondary")
  };

  const showAllProjects = () => {
    setShowFavorites(false)
    setVariantFavorite("secondary")
    setVariantAll("primary")
  }

  const clearFilter = () => {
    setSearchProject("")
    setShowFavorites(false)
    setVariantFavorite("secondary")
    setVariantAll("primary")
    setSelectState("")
  }

  const taskCount = (project) => {
    const count = taskList.filter((task) => task.project === project )

    return count.length
  }

  if (id) {
    return <Outlet />
  }
  
  return (
    <div>
      <ProjectHeader 
        value={searchProject} 
        onSearchChange={(e) => setSearchProject(e.target.value)} 
        showFavorite={showFavoriteProjects} 
        showAll={showAllProjects} 
        variantFavorite={variantFavorite} 
        variantAll={variantAll} 
        stateValue={selectState}
        onSelectState={(e) => setSelectState(e.target.value)}
        clearFilter={clearFilter}
      />
      
      {
        isLoading ? (
          <CircularProgress size={16} />
        ) : (
          <div className="flex flex-col gap-2">
            <div className="hidden h-7 items-center rounded-md border bg-fair px-2 md:flex">
              <p className="w-28 font-medium text-dark ml-12">ID</p>
              <p className="w-28 font-medium text-dark">Created</p>
              <p className="flex-1 font-medium text-dark">Project Name</p>
              <p className="w-24 font-medium text-dark">State</p>
              <p className="w-12 font-medium text-dark">Favorite</p>
            </div>
            {
              searchData.map((project) => (
                <Project 
                  key={project.id} 
                  projectName={project.project_name} 
                  id={project.id} 
                  isFavorite={project.isFavorite} 
                  state={formatString(project.state)} 
                  taskCount={taskCount(project.project_name)} 
                  date={project.created_at}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}