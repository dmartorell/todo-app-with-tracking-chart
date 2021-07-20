/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useReducer, useRef } from 'react';
import Task from './components/Task/Task';
import ACTIONS from './ACTIONS';
import MyResponsivePie from './components/Pie/Pie';

const reducer = ((todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [{ id: Date.now(), name: action.taskName, complete: false }, ...todos];
    case ACTIONS.DELETE_TASK:
      return todos.filter((task) => task.id !== action.id);
    case ACTIONS.TOGGLE_TASK:
      return todos.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            complete: !task.complete,
          };
        }
        return task;
      });
    default:
      return todos;
  }
});

function App() {
  const inputRef = useRef();
  const [taskName, setTaskName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);
  const data = [
    {
      id: 'Done',
      label: 'Done',
      value: todos.filter((task) => task.complete).length,
      color: 'hsl(165, 50%, 10%)',
    },
    {
      id: 'To-do',
      label: 'To-do',
      value: todos.filter((task) => !task.complete).length,
      color: 'hsl(100, 90%, 90%)',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TASK, taskName });
    setTaskName('');
  };
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>TODO APP with useReducer</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} style={{ width: '100%', padding: '5px 10px' }} type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} autoFocus />
      </form>
      <br />
      <ul>
        {
        todos.map((task) => (
          <li style={{ listStyle: 'none' }} key={task.id}>
            <Task task={task} dispatch={dispatch} inputRef={inputRef} />
          </li>
        ))
      }
      </ul>
      <br />
      <div style={{ height: '400px', width: '400px' }}>
        <MyResponsivePie data={data} />
      </div>
    </>
  );
}

export default App;
