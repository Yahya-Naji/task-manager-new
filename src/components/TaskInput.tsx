import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (taskName: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a task"
        value={taskName}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleAddTask} disabled={!taskName}>
        Create
      </button>
    </div>
  );
};

export default TaskInput;

