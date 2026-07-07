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
        console.log(data)
        setEmployeeList((prev) => [...prev, insertedEmployee])
      }
    } catch (error) {
      console.log(error)
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
    <EmployeeContext.Provider value={{ employeeList, isLoading, fetchEmployees, insertEmployee }} >
      { children }
    </EmployeeContext.Provider>
  )
}

export { EmployeeContext, EmployeeProvider }