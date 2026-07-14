/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { supabase } from "../service/supabase";
// import { employeeDataMock } from "../mock/employees";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {

  const [employeeList, setEmployeeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEmployees = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("employees")
        .select("*")

      if (error) {
        throw error
      }

      setEmployeeList(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const insertEmployee = async (newEmployee) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("employees")
        .insert(newEmployee)
        .select()

        if (error) {
          throw error
        }
      
      const insertedEmployee = data?.[0];

      if (insertedEmployee) {
        setEmployeeList((prev) => [...prev, insertedEmployee])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
    
  }

  const deleteEmployee = async (id) => {
    try {
      console.log("delete context:", id)
      const { error } = await supabase
        .from("employees")
        .delete()
        .eq("id", id)

      if (error) {
        throw error;
      }

      setEmployeeList(employeeList.filter((employee) => employee.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const updateEmployee = async (id, details) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("employees")
        .update(details)
        .select()
        .eq("id", id)

      if (error) {
        throw error
      }

      const updatedEmployeeData = data?.[0]; // connected to line 14 in TeamPage.jsx

      if (updatedEmployeeData) {
        setEmployeeList((prev) =>
          prev.map((employee) =>
            employee.id === id ? updatedEmployeeData : employee
          )
        )
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  // Mock API Call
  // useEffect(() => {
  //   setEmployeeList(employeeDataMock)
  // }, [])

  useEffect(() => {
    fetchEmployees();
  }, [])

  return (
    <EmployeeContext.Provider value={{ employeeList, isLoading, fetchEmployees, insertEmployee, deleteEmployee, updateEmployee }} >
      { children }
    </EmployeeContext.Provider>
  )
}

export { EmployeeContext, EmployeeProvider }