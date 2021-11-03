import { combineReducers } from "redux";
import currentTaskReducer from "./currentTaskReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  currentTask: currentTaskReducer,
});

export default rootReducer;
