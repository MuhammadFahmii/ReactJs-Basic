import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../stores/taskSlices";
import Tasks from "../Tasks";

export default function Home() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <>
      <div className="title">
        <h1 className="gradient">todos</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add todo.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <Tasks />
    </>
  );
}
