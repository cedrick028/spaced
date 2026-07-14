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

  const deleteProject = async (id) => {
    try{
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id)

      if (error) {
        throw error
      }

      setProjectList(projectList.filter((proj) => proj.id !== id))
    } catch (error) {
      console.log(error);
    }
  }

  const updateProject = async (id, details) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("projects")
        .update(details)
        .eq("id", id)
        .select()

      if (error) {
        throw error
      }

      const updatedProject = data?.[0]

      if (updatedProject) {
        setProjectList((prev) =>
          prev.map((project) =>
            project.id === id ? updatedProject : project
          )
        )
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
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
    <ProjectContext.Provider value={{ projectList, isLoading, insertProject, updateProjectFavorite, deleteProject, updateProject }} >
      { children }
    </ProjectContext.Provider>
  )
}

export { ProjectContext, ProjectProvider }