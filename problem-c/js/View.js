'use strict';

import {getIncompleteTasks} from "./Model.js";

function renderSingleTask(task, markCompleteCallback) {
    let list = document.createElement("li");
    list.classList.add("list-group-item");
    list.textContent = " " + task.description;
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-sm", "btn-warning");
    btn.innerHTML = '<span class="material-icons-outlined">done</span>';
    btn.addEventListener("click", () => {
        markCompleteCallback(task);
    });
    list.prepend(btn);
    return list;
}

export function renderTaskList(markCompleteCallback) {
    let ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-flush");
    let tasks = getIncompleteTasks();
    if (tasks.length == 0) {
        let none = document.createElement("div");
        none.textContent = "None!";
        return none;
    }
    for (let i = 0; i < tasks.length; i++) {
        ul.append(renderSingleTask(tasks[i], markCompleteCallback));
    }
    return ul;
}


