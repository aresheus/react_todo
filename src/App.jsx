import style from "./styles/App.module.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import {
  saveData,
  readDatas,
  getRandomID,
  removeDataByID,
  updateDataByID,
} from "./services/crud-service";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(readDatas() ?? []);
  }, []);

  function handleSendingData(data) {
    data["id"] = getRandomID(todos);

    saveData(data);

    setTodos(readDatas());
  }

  function deleteTodo(id) {
    removeDataByID(id);
    setTodos(readDatas());
  }

  function updateTodo(todo) {
    updateDataByID(todo);
    setTodos(readDatas());
  }

  return (
    <main className={style.main}>
      <TodoInput sendData={handleSendingData} />
      <TodoList
        todos={todos}
        handleDelete={deleteTodo}
        handleUpdate={updateTodo}
      />
    </main>
  );
}

export default App;
