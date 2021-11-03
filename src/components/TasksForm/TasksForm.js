import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTasks from "../../hooks/useTasks";

const TasksForm = () => {
  const { createTask, loadCurrentTask } = useTasks();

  const initialValues = useMemo(
    () => ({
      name: "",
      state: false,
    }),
    []
  );

  const currentTask = useSelector((store) => store.currentTask);

  const [taskData, setTaskData] = useState(initialValues);
  const [textButton, setTextButton] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTask.isEditing) {
      setTaskData(currentTask.taskData);
      setTextButton("Edit");
    } else {
      setTaskData(initialValues);
      setTextButton("Create");
    }
  }, [currentTask.isEditing, currentTask.taskData, initialValues]);

  const onChangeData = (event) => {
    setTaskData({
      ...taskData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (currentTask.isEditing) {
      dispatch(loadCurrentTask(taskData));
    } else {
      createTask(taskData);
    }
    setTaskData(initialValues);
  };

  return (
    <>
      <h2>Create a new Task to Procrastinate about</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Task Title: </label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={taskData.name}
          onChange={onChangeData}
          name="taskTitle"
        />
        <button type="submit" value="Submit">
          {textButton}
        </button>
      </form>
    </>
  );
};

export default TasksForm;
