// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescription.push(description);
//   taskComplete.push(false);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// console.log(task);

// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

// a new task with Object function
// const newTask = function (title, description) {
//   const task = {
//     title,
//     description,
//     complete: false,
//   };
//   return task;
// };

// const task1 = newTask(
//   "Clean Cat Litter",
//   "Take all the 💩 out of the litter box"
// );
// const task2 = newTask("Do Laundry", "😨");
// const task = [task1, task2];

// const logTaskState = function (task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been complete`);
// };

// const completeTask = function (task) {
//   task.complete = true;
// };

// logTaskState(task1);
// completeTask(task1);
// logTaskState(task1);

// console.log(task);

//how to do it with OOP

const newTask = function (title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been complete`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
};

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
