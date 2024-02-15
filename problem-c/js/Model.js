'use strict';

import initialTasks from "./task-data.js";

initialTasks.map((temp, index) => {
    temp.id = index + 1;
});

var currentTaskList = [...initialTasks];

export function getIncompleteTasks(arr) {
    return Object.values(arr).filter((arr) => arr.status == 'incomplete');
}

export function addTask(string) {
    let task = {"description":string, "status":"incomplete", "id": currentTaskList[currentTaskList.length - 1].id + 1}
    currentTaskList = [...currentTaskList, task];
}

export function markComplete(id) {
    currentTaskList.map((temp) => {
        var copy = temp;
        if (copy.id == id) {
            copy.status = "complete";
        }
    });
    return [...currentTaskList]
}