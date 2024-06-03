import { useState } from "react";
import style from "../styles/TodoBox.module.css";
import { TodoContext, useContext } from "../context/todo-context";

export default function TodoBox({ title, desc, id }) {
  const [showModal, setShowModal] = useState(false);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const { handleDelete, handleUpdate } = useContext(TodoContext);

  function handleTitle(e) {
    setInputTitle(e.target.value);
  }
  function handleDesc(e) {
    setInputDesc(e.target.value);
  }

  function handleUpdateModal() {
    setInputTitle(title);
    setInputDesc(desc);

    setShowModal(true);
  }

  function updateData() {
    const updatedTask = {
      title: inputTitle,
      desc: inputDesc,
      id,
    };

    handleUpdate(updatedTask);

    setShowModal(false);
  }

  return (
    <article className={style.todoBox}>
      <p className={style.idText}>ID : {id}</p>
      {showModal ? (
        <>
          <div className={style.titleArea}>
            <h1>TODO Title</h1>
            <input
              type="text"
              className={style.inputUpdate}
              placeholder="Title"
              value={inputTitle}
              onChange={handleTitle}
            />
          </div>

          <div className={style.descArea}>
            <h1>TODO Description</h1>
            <textarea
              rows={7}
              className={style.textareaUpdate}
              placeholder="Description"
              value={inputDesc}
              onChange={handleDesc}
            ></textarea>
          </div>

          <button onClick={updateData} className={style.update_btn}>
            Update
          </button>
        </>
      ) : (
        <>
          <div className={style.titleArea}>
            <h1>TODO Title</h1>
            <p>{title}</p>
          </div>

          <div className={style.descArea}>
            <h1>TODO Description</h1>
            <p>{desc}</p>
          </div>

          <div className={style.buttons}>
            <button onClick={handleUpdateModal}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        </>
      )}
    </article>
  );
}
