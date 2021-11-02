import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
  updateTaskAction,
} from "../actions/actionCreators";

const urlApi = "https://todo-list-franny-medico.herokuapp.com/tasks";

export const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(urlApi);
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};
export const createTaskThunk = (task) => {
  return async (dispatch) => {
    const response = await fetch(urlApi, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTask = await response.json();

    dispatch(createTaskAction(newTask));
  };
};

export const deleteTaskThunk = (id) => {
  return async (dispatch) => {
    const response = await fetch(`${urlApi}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      dispatch(deleteTaskAction(id));
    }
  };
};

export const updateTaskThunk = (task) => {
  return async (dispatch) => {
    const response = await fetch(`${urlApi}/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTask = await response.json();

    dispatch(updateTaskAction(newTask));
  };
};
