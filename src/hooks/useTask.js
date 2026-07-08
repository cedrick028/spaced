import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function useTask() {
  return useContext(TaskContext);
}