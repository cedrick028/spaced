import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskProvider } from './context/TaskContext.jsx'
import { EmployeeProvider } from './context/EmployeeContext.jsx'
import { ProjectProvider } from './context/ProjectContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EmployeeProvider>
    <ProjectProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ProjectProvider>
  </EmployeeProvider>
)
