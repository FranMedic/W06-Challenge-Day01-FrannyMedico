import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const TasksForm = () => {
  const { createTask } = useTasks();

  const initialValues = {
    name: "",
    state: false,
  };

  const [taskData, setTaskData] = useState(initialValues);

  const onChangeData = (event) => {
    setTaskData({
      ...taskData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createTask(taskData);
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
          Create
        </button>
      </form>
    </>
  );
};

export default TasksForm;
