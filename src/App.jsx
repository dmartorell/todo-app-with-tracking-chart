/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useReducer } from 'react';

function App() {
  const [taskName, setTaskName] = useState('');
  const ACTIONS = {
    ADD_TASK: 'add_task',
  };

  const reducer = ((state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TASK:
        return [...state, { id: Date.now(), name: action.payload, complete: false }];
      default:
        return state;
    }
  });
  const [todos, dispatch] = useReducer(reducer, []);

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
          <li key={task.id}>{task.name}</li>
        ))
      }
      </ul>

    </>
  );
}

export default App;
