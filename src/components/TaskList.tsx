import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../models/Task';

interface TaskListProps {
  tasks: Task[];
  onToggleTaskCompletion: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTaskCompletion, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="mt-3">No tasks found.</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleTaskCompletion={onToggleTaskCompletion} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
