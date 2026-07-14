import { cardData } from "../../../config/cardConfig";
import useTask from "../../../hooks/useTask";
import Card from "../../UI/card/Card";

export default function CardSection() {
  const { taskList } = useTask()
  
  const getDataValue = (label) => {
    switch(label.toLowerCase()) {
      case "task in progress" :
        return taskList.filter((task) => task.status.toLowerCase() === 'in progress').length;

      case "task testing" :
        return taskList.filter((task) => task.status.toLowerCase() === 'testing').length

      case "task completed" :
        return taskList.filter((task) => task.status.toLowerCase() === 'completed').length

      default :
        return taskList.length;
    }
  }
  
  return (
    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {
        cardData.map((card) => (
          <Card key={card.label} label={card.label} icon={card.icon} data={getDataValue(card.label)} />
        ))
      }
    </div>
  )
}