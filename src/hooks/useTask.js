import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export default function useTask() {
  return useContext(TaskContext);
}