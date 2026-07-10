import CardSection from "../../components/layout/card section/CardSection";
import useTask from "../../hooks/useTask";
import TaskRow from "./TaskRow";

export default function Dashboard() {

  const { taskList } = useTask();

  const notStartedTask = taskList.filter((task) => task.status.toLowerCase() === "not started");
  const inProgressTask = taskList.filter((task) => task.status.toLowerCase() === "in progress");
  const testingTask = taskList.filter((task) => task.status.toLowerCase() === "testing");
  const completedTask = taskList.filter((task) => task.status.toLowerCase() === "completed");
  const rejectedTask = taskList.filter((task) => task.status.toLowerCase() === "rejected");
  
  return (
    <div>
      <CardSection />
      <div className="flex flex-col gap-4">
        { notStartedTask.length !== 0 && ( <TaskRow status="not started" list={notStartedTask} /> )}
        { inProgressTask.length !== 0 && ( <TaskRow status="in progress" list={inProgressTask} /> )}
        { testingTask.length !== 0 && ( <TaskRow status="testing" list={testingTask} /> )}
        { completedTask.length !== 0 && ( <TaskRow status="completed" list={completedTask} /> )}
        { rejectedTask.length !== 0 && ( <TaskRow status="rejected" list={rejectedTask} /> )}
      </div>
    </div>
  )
}