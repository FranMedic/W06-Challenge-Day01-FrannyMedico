import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../TaskCard/TaskCard";

const TasksList = () => {
  const { tasks, loadtasks, deleteTask, loadCurrentTask } = useTasks();

  const onDeleteTask = (id) => {
    deleteTask(id);
  };

  const onUpdateTask = (task) => {
    loadCurrentTask(task);
  };

  useEffect(() => {
    loadtasks();
  }, [loadtasks]);

  return (
    <>
      <section className="row">
        <h2>Let's Do It !</h2>

        <ul className="list-unstyled">
          {tasks.map((task) => (
            <li className="row" key={task.id}>
              <TaskCard
                task={task}
                onDelete={() => onDeleteTask(task.id)}
                onUpdate={() => onUpdateTask(task)}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TasksList;
