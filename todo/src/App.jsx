import React, { useState } from 'react';
import './App.css';
import Task from './Component/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addTask = () => {
    if (text.trim() !== '') {
      const newTask = { id: Date.now(), text, date };
      setTasks([...tasks, newTask]);
      setText('');
      setDate('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = () => {
    if (editingId !== null) {
      const updatedTasks = tasks.map(task => {
        if (task.id === editingId) {
          return { ...task, text, date };
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditingId(null);
      setText('');
      setDate('');
    }
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    if (taskToEdit) {
      setEditingId(taskId);
      setText(taskToEdit.text);
      setDate(taskToEdit.date);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Todo App</h1>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col">
          {editingId === null ? (
            <button className="btn btn-primary" onClick={addTask}>Add Task</button>
          ) : (
            <button className="btn btn-primary" onClick={updateTask}>Update Task</button>
          )}
        </div>
      </div>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <input type="text" value={task.text} readOnly className="form-control" />
            <input type="date" value={task.date} readOnly className="form-control" />
            <div>
              <button className="btn btn-warning me-2" onClick={() => editTask(task.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {/* <Task name={"karthick"} onClick={handeleone}/> */}
    </div>
  );
}

export default App;
