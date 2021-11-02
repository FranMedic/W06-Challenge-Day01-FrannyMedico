import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  createTaskThunk,
  deleteTaskThunk,
  loadTasksThunk,
  updateTaskThunk,
} from "../redux/thunks";

const useTasks = () => {
  const tasks = useSelector((store) => store.tasks);

  const dispatch = useDispatch();

  const loadtasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTask = useCallback(
    (task) => {
      dispatch(createTaskThunk(task));
    },
    [dispatch]
  );

  const deleteTask = useCallback(
    (id) => {
      dispatch(deleteTaskThunk(id));
    },
    [dispatch]
  );

  const updateTask = useCallback(
    (task) => {
      dispatch(updateTaskThunk(task));
    },
    [dispatch]
  );

  return {
    tasks,
    loadtasks,
    createTask,
    deleteTask,
    updateTask,
  };
};

export default useTasks;
