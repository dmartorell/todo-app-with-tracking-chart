/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useReducer } from 'react';

function App() {
  const [taskName, setTaskName] = useState('');
  const ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
  };

  const reducer = ((state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TASK:
        return [...state, { id: Date.now(), name: action.payload, complete: false }];
      case ACTIONS.DELETE_TASK:
        return state.filter((task) => task.id !== action.payload);
      default:
        return state;
    }
  });
  const [todos, dispatch] = useReducer(reducer, []);

  const deleteTask = (id) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: id });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TASK, payload: taskName });
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
          <li key={task.id}>
            {task.name}
            <button type="button" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))
      }
      </ul>

    </>
  );
}

export default App;
