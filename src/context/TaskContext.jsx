/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { supabase } from "../service/supabase";
// import { taskDataMock } from "../mock/tasks";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {

  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // mock API call
  // useEffect(() => {
  //   setTaskList(taskDataMock);
  // }, []);

  // supabase call
  const fetchTask = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select(`
          id,
          task_name,
          projects(
            project_name
          ),
          employees(
            first_name,
            last_name
          ),
          status,
          priority,
          due_date,
          created_at,
          isFavorite,
          description
        `)

      if (error) {
        throw error;
      }

      const formatDbData = data.map((d) => {

        return {
          id: d.id,
          task_name: d.task_name,
          project: d.projects?.project_name ?? '-',
          assignee: `${d.employees?.first_name} ${d.employees?.last_name}` ?? '-',
          status: d.status,
          priority: d.priority,
          due_date: d.due_date,
          created_at: d.created_at,
          isFavorite: d.isFavorite,
          description: d.description
        }
      })

      setTaskList(formatDbData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false)
    }
  }

  const insertTask = async (newTask) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("tasks")
        .insert(newTask)
        .select()
      
      if (error) {
        throw error;
      }

      const insertedTask = data?.[0];
      
      if (insertedTask) {
        setTaskList((prev) => [...prev, insertedTask])
      }

      fetchTask();

    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 400)
    }
  }

  const updateTaskFavorite = async (id, table, isFavorite) => {
    try {
      const {data, error} = await supabase
        .from(table)
        .update({
          isFavorite: isFavorite = !isFavorite
        })
        .eq("id", id)
        .select()

      if (error) {
        throw error;
      }

      const updatedCol = data?.[0];

      if (updatedCol) {
        setTaskList((prev) =>
          prev.map((task) =>
            task.id === id ? { ...task, isFavorite: updatedCol.isFavorite } : task
          )
        )
      }

    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (id) => {
    try {
      const { error } = await supabase  
        .from("tasks")
        .delete()
        .eq("id", id)

      if (error) {
        throw error
      }

      setTaskList(taskList.filter((prev) => prev.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTasksByProjectName = (projectName) => {
    setTaskList((prev) =>
      prev.filter((task) => task.project.toLowerCase() !== projectName.toLowerCase())
    )
  }

  const deleteTasksByEmployeeName = (assignee) => {
    setTaskList((prev) => prev.filter((task) => task.assignee.toLowerCase() !== assignee.toLowerCase()))
  }

  useEffect(() => {
    fetchTask()
  }, [])

  return (
    <TaskContext.Provider value={{ taskList, isLoading, insertTask, updateTaskFavorite, deleteTask, deleteTasksByProjectName, deleteTasksByEmployeeName }} >
      { children }
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProvider }