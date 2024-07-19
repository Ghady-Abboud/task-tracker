import React from 'react';
import './backlog.css';
import 'boxicons';

const Backlog = ({ tasks, onDelete, onTaskDrop, onDragOver }) => {

    return (
        <div className="backlog" onDrop={(event) => onTaskDrop(event, "backlog")} onDragOver={onDragOver}>
            Backlog
            <div className="backlog-tasks">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="task"
                        draggable
                        onDragStart={(event) => {
                            event.dataTransfer.setData("taskIndex", index);
                            event.dataTransfer.setData("taskLocation", "backlog");
                        }}
                    >
                        <div className="task-content">○ {task.name}
                            <i className='bx bxs-trash trash-icon' onClick={() => onDelete(index, "backlog")}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Backlog;
