import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Task } from './models/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  const handleTabChange = (newTab: 'active' | 'completed') => {
    setActiveTab(newTab);
  };

  const handleAddTask = (taskName: string) => {
    const newTask: Task = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <TaskInput onAddTask={handleAddTask} />
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => handleTabChange('active')}
          >
            Active Tasks
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => handleTabChange('completed')}
          >
            Completed Tasks
          </button>
        </li>
      </ul>
      <div className="row">
        <div className="col">
          {activeTab === 'active' && (
            <TaskList
              tasks={tasks.filter(task => !task.completed)}
              onToggleTaskCompletion={handleToggleTaskCompletion}
              onDeleteTask={handleDeleteTask}
            />
          )}
          {activeTab === 'completed' && (
            <TaskList
              tasks={tasks.filter(task => task.completed)}
              onToggleTaskCompletion={handleToggleTaskCompletion}
              onDeleteTask={handleDeleteTask}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
