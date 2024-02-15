'use strict';

import initialTasks from "./task-data.js";

initialTasks.map((temp, index) => {
    temp.id = index + 1;
});

var currentTaskList = [...initialTasks];

export function getIncompleteTasks() {
    return currentTaskList.filter((currentTaskList) => currentTaskList.status == "incomplete");
}

//console.log(getIncompleteTasks());

export function addTask(string) {
    let task = {"description":string, "status":"incomplete", "id": currentTaskList[currentTaskList.length - 1].id + 1}
    currentTaskList = [...currentTaskList, task];
    //console.log(currentTaskList);
}

export function markComplete(id) {
    currentTaskList = currentTaskList.map((temp) => {
        let copy = {...temp};
        if (copy.id == id) {
            copy.status = "complete";
        }
        return copy;
    });
}

//markComplete(3);
