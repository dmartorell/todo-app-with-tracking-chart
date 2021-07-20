/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useReducer } from 'react';
import Task from './components/Task/Task';
import ACTIONS from './ACTIONS';

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
  const [taskName, setTaskName] = useState('');

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TASK, taskName });
    setTaskName('');
  };
  return (
    <>
      <h2>TODO APP with useReducer</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} autoFocus />
      </form>
      <br />
      <ul>
        {
        todos.map((task) => (
          <li style={{ listStyle: 'none' }} key={task.id}>
            <Task task={task} dispatch={dispatch} />
          </li>
        ))
      }
      </ul>
    </>
  );
}

export default App;
