/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useReducer } from 'react';

function App() {
  const [taskName, setTaskName] = useState('');
  const ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
    TOGGLE_TASK: 'toggle_task',
  };

  const reducer = ((state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TASK:
        return [{ id: Date.now(), name: action.taskName, complete: false }, ...state];
      case ACTIONS.DELETE_TASK:
        return state.filter((task) => task.id !== action.id);
      case ACTIONS.TOGGLE_TASK:
        return state.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              complete: !task.complete,
            };
          }
          return { ...task };
        });
      default:
        return state;
    }
  });
  const [todos, dispatch] = useReducer(reducer, []);

  const deleteTask = (id) => {
    dispatch({ type: ACTIONS.DELETE_TASK, id });
  };
  const toggleTask = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, id });
  };

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
          <li key={task.id} style={{ textDecoration: task.complete ? 'line-through' : '' }}>
            {task.name}
            {' '}
            {task.complete}
            <button type="button" onClick={() => toggleTask(task.id)}>{task.complete ? 'Undo' : 'Done'}</button>
            <button type="button" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))
      }
      </ul>
    </>
  );
}

export default App;
