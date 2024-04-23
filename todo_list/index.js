import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n \tWelcome to codewithAhmer - Tode list application\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your task"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added successfully`);
    let addMore = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "false",
        }
    ]);
    if (addMore.addMore) {
        conditions = true;
    }
    else {
        conditions = false;
    }
}
console.log("Your updated Todo List:", todoList);
