import React from 'react';
import './inprogress.css';
import 'boxicons';

const InProgress = ({ tasks, onDelete, onTaskDrop, onDragOver }) => {

    return (
        <div className="inprogress" onDrop={(event) => onTaskDrop(event, "in progress")} onDragOver={onDragOver}>
            In Progress
            <div className="inprogress-tasks">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="task"
                        draggable
                        onDragStart={(event) => {
                            event.dataTransfer.setData("taskIndex", index);
                            event.dataTransfer.setData("taskLocation", "in progress");
                        }}
                    >
                        <div className="task-content">{task.name}
                            <i className='bx bxs-trash trash-icon' onClick={() => onDelete(index, "in progress")}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InProgress;
