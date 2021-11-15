import { useState } from "react";
import { useDispatch } from "react-redux";
import MainNavbar from "../main-navbar/MainNavbar";
import { addTask } from "../stores/taskSlices";
import Tasks from "../tasks/Tasks";
import "./Todo.css";

export default function Todo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <>
      <MainNavbar />
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
            id="inputTodo"
          />
          <button type="submit" id="submitTodo">
            submit
          </button>
        </form>
      </div>
      <Tasks />
    </>
  );
}
