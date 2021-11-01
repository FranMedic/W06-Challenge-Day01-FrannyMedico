import "./App.css";
import TasksForm from "./components/TasksForm/TasksForm";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <>
      <h1>What to do today?</h1>
      <TasksList />
      <TasksForm />
    </>
  );
}

export default App;
