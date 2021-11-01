import TaskCard from "../TaskCard/TaskCard";

const TasksList = () => {
  const tasks = [
    {
      id: "1",
      name: "Go to the grocery store",
      done: false,
    },
  ];

  return (
    <>
      <h2>Let's Do It !</h2>
      <ul>
        {tasks.map((task) => (
          <TaskCard id={task.id} name={task.name} done={task.done} />
        ))}
      </ul>
    </>
  );
};

export default TasksList;
