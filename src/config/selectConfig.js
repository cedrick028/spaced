export const statusOptions = [
  { label: "Not Started", value: "not Started" },
  { label: "In Progress", value: "in Progress" },
  { label: "Testing", value: "testing" },
  { label: "Completed", value: "completed" },
  { label: "Rejected", value: "rejected" }
]

export const priorityOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Urgent", value: "urgent" }
]

export const stateOptions = [
  { label: "Draft", value: "draft" },
  { label: "Active", value: "active" },
  { label: "Closed", value: "closed" },
]

export const assigneeOptions = (data) => {
  const assignee = data.map((employee) => ({
    label: `${employee.first_name} ${employee.last_name}`,
    value: employee.id
  }))

  return assignee
}

export const positionOptions = [
  { label: "Project Manager", value: "project manager" },
  { label: "Fullstack Developer", value: "fullstack developer" },
  { label: "QA Engineer", value: "qa engineer" }
]

export const departmentOptions = [
  { label: "Operations", value: "operations" },
  { label: "Development", value: "development" },
  { label: "Solutions", value: "solutions" },
]