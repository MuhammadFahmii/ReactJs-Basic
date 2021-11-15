import { createSlice } from "@reduxjs/toolkit";
const initialValue = [
  {
    id: 1,
    title: "Membuat Komponen",
    completed: true,
  },
  {
    id: 2,
    title: "Unit Testing",
    completed: false,
  },
  {
    id: 3,
    title: "Setup Development Environment",
    completed: true,
  },
  {
    id: 4,
    title: "Deploy ke server",
    completed: false,
  },
];

const taskSlices = createSlice({
  name: "task",
  initialState: {
    tasks: initialValue,
  },
  reducers: {
    addTask: (state, action) => {
      const newData = {
        id: state.tasks.length + 1,
        title: action.payload,
        completed: false,
      };
      state.tasks = [...state.tasks, newData];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((c) => c.id !== action.payload);
    },
    toogleCompleted: (state, action) => {
      state.tasks = state.tasks.map((c) =>
        c.id === action.payload ? { ...c, completed: !c.completed } : c
      );
    },
  },
});

export const { addTask, deleteTask, toogleCompleted } = taskSlices.actions;
export default taskSlices.reducer;
