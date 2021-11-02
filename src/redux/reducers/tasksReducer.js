import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks = tasks;

  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;

    case actionTypes.createTask:
      newTasks = [...tasks, action.task];
      break;

    case actionTypes.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;

    case actionTypes.editTask:
      newTasks = tasks.map((task) =>
        task.id === action.task.id
          ? {
              ...task,
              ...action.task,
            }
          : task
      );
      break;

    default:
      break;
  }
  return newTasks;
};

export default tasksReducer;
