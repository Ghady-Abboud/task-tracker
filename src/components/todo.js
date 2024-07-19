import React from 'react';
import './todo.css';
import 'boxicons';

const ToDo = ({ tasks, onDelete, onTaskDrop, onDragOver }) => {

    return (
        <div className="todo" onDrop={(event) => onTaskDrop(event, "todo")} onDragOver={onDragOver}>
            ToDo
            <div className="todo-tasks">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="task"
                        draggable
                        onDragStart={(event) => {
                            event.dataTransfer.setData("taskIndex", index);
                            event.dataTransfer.setData("taskLocation", "todo");
                        }}
                    >
                        <div className="task-content">{task.name}
                            <i className='bx bxs-trash trash-icon' onClick={() => onDelete(index, "todo")}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDo;
