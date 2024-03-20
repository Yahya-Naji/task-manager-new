import React from 'react';
import { Task } from '../models/Task';

interface TaskItemProps {
  task: Task;
  onToggleTaskCompletion: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleTaskCompletion, onDeleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTaskCompletion(task.id)}
        />
        <label className="form-check-label" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </label>
      </div>
      <button className="btn btn-danger" onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
