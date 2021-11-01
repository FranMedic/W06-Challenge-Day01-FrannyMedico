import { loadTasksAction } from "../actions/actionCreators";

export const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todo-list-franny-medico.herokuapp.com/tasks"
    );
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};
