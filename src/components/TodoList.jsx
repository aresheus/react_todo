import TodoBox from "./TodoBox";
import style from "../styles/TodoList.module.css";

export default function TodoList({ todos, handleDelete, handleUpdate }) {
  const todoBoxes = todos.map((todo, i) => (
    <TodoBox
      {...todo}
      key={i}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  ));

  return <section className={style.todoList}>{todoBoxes}</section>;
}
