import React from 'react';
import './done.css';
import 'boxicons';

const Done = ({ tasks, onDelete, onTaskDrop, onDragOver }) => {

    return (
        <div className="done" onDrop={(event) => onTaskDrop(event, "done")} onDragOver={onDragOver}>
            Done
            <div className="done-tasks">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="task"
                        draggable
                        onDragStart={(event) => {
                            event.dataTransfer.setData("taskIndex", index);
                            event.dataTransfer.setData("taskLocation", "done");
                        }}
                    >
                        <div className="task-content">{task.name}
                            <i className='bx bxs-trash trash-icon' onClick={() => onDelete(index, "done")}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Done;
