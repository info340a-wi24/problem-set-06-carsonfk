'use strict';

import * as Model from "./Model.js";
import { renderTaskList } from "./View.js";

function markCompleteCallback(task) {
    Model.markComplete(task.id);
    renderTaskView();
}

export function renderTaskView() {
    let root = document.getElementById("tasks-root");
    root.innerHTML = "";
    root.append(renderTaskList(markCompleteCallback));
}

var button = document.getElementById("add-task-button");
button.addEventListener("click", () => {
    var input = document.getElementsByTagName("input")[0];
    if (input.value != "") {
        Model.addTask(input.value);
        input.value = "";
        renderTaskView();
    }

});