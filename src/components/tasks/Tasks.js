import Task from "../Task";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  return tasks.map((d) => <Task key={d.id} data={d} />);
};

export default Tasks;
