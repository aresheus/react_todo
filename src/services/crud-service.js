function saveData(task) {
  const data = localStorage.getItem("data");

  data
    ? localStorage.setItem("data", JSON.stringify([...JSON.parse(data), task]))
    : localStorage.setItem("data", JSON.stringify([task]));
}

function readDatas() {
  const data = localStorage.getItem("data");

  return JSON.parse(data);
}

function removeDataByID(id) {
  const tasks = JSON.parse(localStorage.getItem("data"));
  const tasksAfterRemoved = tasks.filter((x) => x.id != id);

  localStorage.setItem("data", JSON.stringify(tasksAfterRemoved));
}

function updateDataByID(editedTodo) {
  const tasks = JSON.parse(localStorage.getItem("data"));

  const tasksAfterUpdated = tasks.map((todo) => {
    if (todo.id == editedTodo.id) return editedTodo;
    return todo;
  });

  localStorage.setItem("data", JSON.stringify(tasksAfterUpdated));
}

function getRandomID(tasks) {
  const limit = 1000;
  let generatedID;
  const existIDs = tasks.map((x) => x.id);
  do {
    generatedID = Math.floor(Math.random() * limit);
  } while (existIDs.includes(generatedID));

  return generatedID;
}

export { saveData, readDatas, getRandomID, removeDataByID, updateDataByID };
