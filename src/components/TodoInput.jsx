import { useState } from "react";
import style from "../styles/TodoInput.module.css";

export default function TodoInput({ sendData }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  function handleTitle(e) {
    setInputTitle(e.target.value);
  }

  function handleDesc(e) {
    setInputDesc(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputTitle && inputDesc) {
      const task = {
        title: inputTitle,
        desc: inputDesc,
      };

      setInputTitle("");
      setInputDesc("");

      sendData(task);
    }
  }

  return (
    <article className={style.todoInput}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.input_area}>
          <label>TODO Title</label>
          <input
            type="text"
            placeholder="Title"
            className={style.input}
            value={inputTitle}
            onChange={handleTitle}
          />
        </div>

        <div className={style.input_area}>
          <label>TODO Description</label>
          <textarea
            rows={7}
            className={style.textarea}
            placeholder="Description"
            value={inputDesc}
            onChange={handleDesc}
          ></textarea>
        </div>

        <button className={style.create_btn}>Create</button>
      </form>
    </article>
  );
}
