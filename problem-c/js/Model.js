'use strict';

import initialTasks from "../js/task-data.js";



var currentTaskList = initialTasks.map((temp, index) => {
    console.log(temp);
    temp.id = index + 1;
    console.log(temp);
});

console.log(currentTaskList);

