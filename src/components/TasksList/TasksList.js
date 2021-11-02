import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../TaskCard/TaskCard";

const TasksList = () => {
  const { tasks, loadtasks, deleteTask, updateTask } = useTasks();

  const onDeleteTask = (id) => {
    deleteTask(id);
  };

  const onUpdateTask = (task) => {
    updateTask(task);
  };

  useEffect(() => {
    loadtasks();
  }, [loadtasks]);

  return (
    <>
      <h2>Let's Do It !</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard
              task={task}
              onDelete={() => onDeleteTask(task.id)}
              onUpdate={() => onUpdateTask(task)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
