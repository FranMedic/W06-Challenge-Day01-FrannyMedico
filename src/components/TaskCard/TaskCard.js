const TaskCard = ({ task: { id, name, done }, onDelete, onUpdate }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Nº{id}</p>
      <label>
        <input type="checkbox" /> done
      </label>
      <p>State: {done ? "Terminada" : "En ello estamos"} </p>
      <button className="btn btn-info" onClick={onUpdate}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default TaskCard;
