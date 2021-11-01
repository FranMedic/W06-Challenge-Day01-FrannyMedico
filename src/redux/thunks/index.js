import { createTaskAction, loadTasksAction } from "../actions/actionCreators";

export const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todo-list-franny-medico.herokuapp.com/tasks"
    );
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};
export const createTaskThunks = (task) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todo-list-franny-medico.herokuapp.com/tasks",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newTask = await response.json();

    dispatch(createTaskAction(newTask));
  };
};
