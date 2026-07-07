import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/core layout/Layout"
import Dashboard from "./pages/dashboard/Dashboard"
import ProjectPage from "./pages/project page/ProjectPage"
import TaskPage from "./pages/task page/TaskPage"
import TeamPage from "./pages/team page/TeamPage"
import IntroPage from "./pages/intro page/IntroPage"
import ProjectDetails from "./pages/project page/ProjectDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/spaced/" element={<IntroPage />} />
          <Route path="/spaced/:role/" element={<Layout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<ProjectPage />} >
              <Route path=":id" element={<ProjectDetails />} />
            </Route>
            <Route path="tasks"  element={<TaskPage />} />
            <Route path="team" element={<TeamPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
