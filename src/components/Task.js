import { useDispatch } from "react-redux";
import { deleteTask, toogleCompleted } from "./stores/taskSlices";
import "./Task.css";
import { FaTimes } from "react-icons/fa";
const Task = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="list-todo">
      <h3
        className={data.completed ? "done" : ""}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "550px",
        }}
      >
        <input
          type="checkbox"
          defaultChecked={data.completed ? true : false}
          onChange={() => dispatch(toogleCompleted(data.id))}
        />
        {data.title}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => dispatch(deleteTask(data.id))}
        />
      </h3>
    </div>
  );
};

export default Task;
