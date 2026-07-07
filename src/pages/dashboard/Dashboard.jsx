import useTask from "../../hooks/useTask"
import Table from "../../components/UI/table/Table";
import { tasktableColumns } from "../../config/tableConfig";
import CardSection from "../../components/layout/card section/CardSection";
import { CircularProgress } from "@mui/material";

export default function Dashboard() {
  const { taskList, isLoading } = useTask();

  return (
    <div>
      <CardSection />

      {
        isLoading ? (
          <CircularProgress size={16} />
        ) : (
          <Table 
            tableCols={ tasktableColumns } 
            dataSource={ taskList } 
            displayHeader={ true } 
            enableSearch={ true }  
            enableFilters={['status', 'priority']}
          />
        )
      }
    </div>
  )
}