/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { supabase } from "../service/supabase";
// import { projectDataMock } from "../mock/projects";

const ProjectContext = createContext()

const ProjectProvider = ({ children }) => {

  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchProjects = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")

      if (error) {
        throw error
      }

      setProjectList(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const insertProject = async (newProject) => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .insert(newProject)
        .select()

      if (error) {
        throw error
      }

      const insertedProject = data?.[0];

      if (insertedProject) {
        setProjectList((prev) => [...prev, insertedProject])
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const updateProjectFavorite = async (id, table, isFavorite) => {
    try {
      const {data, error} = await supabase
        .from(table)
        .update({
          isFavorite: !isFavorite
        })
        .eq("id", id)
        .select()

      if (error) {
        throw error
      }

      const updatedCol = data?.[0];

      if (updatedCol) {
        setProjectList((prev) =>
          prev.map((project) =>
            project.id === id ? { ...project, isFavorite: updatedCol.isFavorite } : project
          )
        )
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  // Mock API call
  // useEffect(() => {
  //   setProjectList(projectDataMock)
  // }, [])

  return (
    <ProjectContext.Provider value={{ projectList, isLoading, insertProject, updateProjectFavorite }} >
      { children }
    </ProjectContext.Provider>
  )
}

export { ProjectContext, ProjectProvider }