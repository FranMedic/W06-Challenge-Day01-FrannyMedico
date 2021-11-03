import actionTypes from "../actions/actionTypes";

const currentTaskReducer = (
  currentTask = { task: {}, isEditing: false },
  action
) => {
  let newCurrentTask;
  switch (action.type) {
    case actionTypes.loadCurrentTask:
      console.log("hola");
      newCurrentTask = { task: action.task, isEditing: true };

      break;

    default:
      newCurrentTask = currentTask;
  }
  return newCurrentTask;
};

export default currentTaskReducer;
