const TaskCard = ({ task: { id, name, done }, onDelete, onUpdate }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Nº{id}</p>
      <p>State: {done ? "Terminada" : "En ello estamos"} </p>
      <button onClick={onUpdate}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default TaskCard;
