import useTasks from "../../hooks/useTasks";

const TaskCard = ({ task: { id, name, done } }) => {
  const { deleteTask } = useTasks();

  const onDelete = () => {
    deleteTask(id);
    console.log(id);
  };

  return (
    <>
      <h3>{name}</h3>
      <p>Nº{id}</p>
      <p>State: {done ? "Terminada" : "En ello estamos"} </p>
      <button>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default TaskCard;
