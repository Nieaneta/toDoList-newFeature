const form = document.querySelector("form");
const input = document.querySelector("input");
const taskNr = document.querySelector("h1 span");
const ul = document.querySelector(".list");
const listEl = document.getElementsByClassName("task");

const removeTask = e => {
    e.target.parentNode.remove();
    taskNr.textContent = listEl.length;
};

const doneTask = e => {
    e.target.parentNode.style.textDecoration = "line-through";
};

const addTask = e => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const newTask = document.createElement("li");
    newTask.className = "task";
    newTask.innerHTML =
        titleTask +
        "<button class='done'>done</button>" +
        "<button class='remove'>remove</button>";

    ul.appendChild(newTask);
    input.value = "";
    taskNr.textContent = listEl.length;

    newTask
        .querySelector("button.remove")
        .addEventListener("click", removeTask);

    newTask.querySelector("button.done").addEventListener("dblclick", doneTask);
};

form.addEventListener("submit", addTask);
