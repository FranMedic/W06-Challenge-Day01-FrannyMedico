import { getTask, getTasks } from "../../factory/factory";
import { createTaskAction, loadTasksAction } from "../actions/actionCreators";
import tasksReducer from "./tasksReducer";

describe("Given a tasks reducer", () => {
  describe("when it recieves a list of task", () => {
    describe("and a loadTask action", () => {
      test("then it should return a list with the tasks to load", () => {
        const tasks = getTasks();
        const action = loadTasksAction(tasks);

        const newTasks = tasksReducer(tasks, action);

        expect(newTasks).toEqual(tasks);
      });
    });

    describe("and a createTask action", () => {
      test("then it should return a list of tasks with the new task in it", () => {
        const tasks = getTasks();
        const oneTask = getTask();
        const action = createTaskAction(oneTask);

        const newTasks = tasksReducer(tasks, action);

        expect(newTasks).toContain(oneTask);
      });
    });
  });
});
