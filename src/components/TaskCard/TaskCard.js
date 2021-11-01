const TaskCard = ({ id, name, done }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Nº{id}</p>
      <p>State: {done ? "Terminada" : "En ello estamos"} </p>
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
};

export default TaskCard;
