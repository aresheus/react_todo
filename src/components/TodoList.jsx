import TodoBox from "./TodoBox";
import style from "../styles/TodoList.module.css";

export default function TodoList({ todos }) {
  const todoBoxes = todos.map((todo, i) => <TodoBox {...todo} key={i} />);

  return <section className={style.todoList}>{todoBoxes}</section>;
}
