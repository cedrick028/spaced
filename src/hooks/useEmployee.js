import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export default function useEmployee() {
  return useContext(EmployeeContext);
}