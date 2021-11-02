import actionTypes from "../actions/actionTypes";

const currentTaskReducer = (
  currenTask = { task: {}, isEditing: false },
  action
) => {
  let newCurrentTask;
  switch (action.type) {
    case actionTypes.loadCurrentTask:
      newCurrentTask = { task: action.task, isEditing: true };
      break;

    default:
      newCurrentTask = currenTask;
  }
  return newCurrentTask;
};

export default currentTaskReducer;
