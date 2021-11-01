import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadTasksThunk } from "../redux/thunks";

const useTasks = () => {
  const tasks = useSelector((store) => store.tasks);

  const dispatch = useDispatch();

  const loadtasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  return {
    tasks,
    loadtasks,
  };
};

export default useTasks;
