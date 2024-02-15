'use strict';

import {getIncompleteTasks} from "./Model.js";

function renderSingleTask(task, markCompleteCallback) {
    let list = document.createElement("li");
    list.classList.add("list-group-item");
    list.textContent = " " + task.description;
    let btn = document.createElement("button");
    btn.classList.add("btn", "btm-sm", "btn-warning");
    btn.innerHTML = '<span class="material-icons-outlined">done</span>';
    btn.addEventListener("click", (task) => {
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
    for (var task in tasks) {
        ul.append(renderSingleTask(task, markCompleteCallback));
    }
    return ul;
}


