'use strict';

import {getIncompleteTasks} from "./Model";

function renderSingleTask(task, callback) {
    let list = document.createElement("li");
    list.classList.add("list-group-item");
    list.textContent = " " + task.description;
    let btn = document.createElement('button');
    btn.classList.add("btn")
}
console.log("hello");