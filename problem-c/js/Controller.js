'use strict';

import "./Model.js";
import { renderTaskList } from "../js/View.js";

function markCompleteCallback(task) {
    markComplete(task.id);
    renderTaskView();
}

function renderTaskView() {
    let root = document.getElementById("tasks-root");
    temp.innerHTML = "";
    root.append(renderTaskList(markCompleteCallback));
}

var button = document.getElementById("add-task-button");
button.addEventListener("click", () => {
    var input = document.getElementById("input");
    if (input.value != "") {
        addTask(input.value);
        input.value = "";
        renderTaskView();
    }

});