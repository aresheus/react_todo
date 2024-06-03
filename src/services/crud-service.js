function saveData(task) {
  const data = localStorage.getItem("data");

  if (data) {
    localStorage.setItem("data", JSON.stringify([...JSON.parse(data), task]));
  } else {
    localStorage.setItem("data", JSON.stringify([task]));
  }
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

function updateDataByID(todo) {
  const tasks = JSON.parse(localStorage.getItem("data"));

  const tasksAfterUpdated = tasks.map((x) => {
    if (x.id == todo.id) return todo;
    return x;
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
