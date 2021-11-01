import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../TaskCard/TaskCard";

const TasksList = () => {
  const { tasks, loadtasks } = useTasks();

  useEffect(() => {
    loadtasks();
  }, [loadtasks]);

  return (
    <>
      <h2>Let's Do It !</h2>
      <ul>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.name}
            done={task.done}
          />
        ))}
      </ul>
    </>
  );
};

export default TasksList;
