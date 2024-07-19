import React, { useState } from 'react';
import './App.css';
import Backlog from './components/backlog';
import ToDo from './components/todo';
import Done from './components/done';
import InProgress from './components/inprogress';

function App() {
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [ToDoTasks, setToDoTasks] = useState([]);
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [DoneTasks, setDoneTasks] = useState([]);

  const addTask = () => {
    const taskName = prompt("Enter task name: ");
    const taskDestination = prompt("Where do you want to place this task? (backlog / todo / in progress / done)");

    if (taskName && taskDestination) {
      const newTask = { name: taskName };

      switch (taskDestination) {
        case "backlog":
          setBacklogTasks([...backlogTasks, newTask]);
          break;

        case "todo":
          setToDoTasks([...ToDoTasks, newTask]);
          break;

        case "in progress":
          setInProgressTasks([...InProgressTasks, newTask]);
          break;

        case "done":
          setDoneTasks([...DoneTasks, newTask]);
          break;
      }
    }
  };

  const deleteTask = (index, taskLocation) => {
    switch (taskLocation) {
      case "backlog":
        setBacklogTasks(backlogTasks.filter((_, i) => i !== index));
        break;
      case "todo":
        setToDoTasks(ToDoTasks.filter((_, i) => i !== index));
        break;
      case "in progress":
        setInProgressTasks(InProgressTasks.filter((_, i) => i !== index));
        break;
      case "done":
        setDoneTasks(DoneTasks.filter((_, i) => i !== index));
        break;
    }
  };

  const onDrop = (event, newLocation) => {
    event.preventDefault();
    const taskIndex = event.dataTransfer.getData("taskIndex");
    const taskLocation = event.dataTransfer.getData("taskLocation");

    let taskToMove;

    // Remove task from its original location
    switch (taskLocation) {
      case "backlog":
        taskToMove = backlogTasks[taskIndex];
        setBacklogTasks(backlogTasks.filter((_, i) => i !== taskIndex));
        break;
      case "todo":
        taskToMove = ToDoTasks[taskIndex];
        setToDoTasks(ToDoTasks.filter((_, i) => i !== taskIndex));
        break;
      case "in progress":
        taskToMove = InProgressTasks[taskIndex];
        setInProgressTasks(InProgressTasks.filter((_, i) => i !== taskIndex));
        break;
      case "done":
        taskToMove = DoneTasks[taskIndex];
        setDoneTasks(DoneTasks.filter((_, i) => i !== taskIndex));
        break;
    }

    // Add task to its new location
    switch (newLocation) {
      case "backlog":
        setBacklogTasks([...backlogTasks, taskToMove]);
        break;
      case "todo":
        setToDoTasks([...ToDoTasks, taskToMove]);
        break;
      case "in progress":
        setInProgressTasks([...InProgressTasks, taskToMove]);
        break;
      case "done":
        setDoneTasks([...DoneTasks, taskToMove]);
        break;
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <h1 id="project-name">Task Tracker</h1>
      <div id="add-task" onClick={addTask}>Add Task</div>
      <div className="task-table">
        <Backlog tasks={backlogTasks} onDelete={deleteTask} onTaskDrop={onDrop} onDragOver={onDragOver} />
        <ToDo tasks={ToDoTasks} onDelete={deleteTask} onTaskDrop={onDrop} onDragOver={onDragOver} />
        <InProgress tasks={InProgressTasks} onDelete={deleteTask} onTaskDrop={onDrop} onDragOver={onDragOver} />
        <Done tasks={DoneTasks} onDelete={deleteTask} onTaskDrop={onDrop} onDragOver={onDragOver} />
      </div>
    </div>
  );
}

export default App;
