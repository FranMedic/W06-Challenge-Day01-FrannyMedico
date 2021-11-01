import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createTaskThunks, loadTasksThunk } from "../redux/thunks";

const useTasks = () => {
  const tasks = useSelector((store) => store.tasks);

  const dispatch = useDispatch();

  const loadtasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTask = useCallback(
    (task) => {
      dispatch(createTaskThunks(task));
    },
    [dispatch]
  );

  return {
    tasks,
    loadtasks,
    createTask,
  };
};

export default useTasks;
