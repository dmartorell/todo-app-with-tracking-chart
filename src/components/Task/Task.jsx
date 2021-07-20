/* eslint-disable react/prop-types */
import React from 'react';
import ACTIONS from '../../ACTIONS';

const Task = ({ task, dispatch, inputRef }) => (
  <>
    <p style={{ display: 'inline', textDecoration: task.complete ? 'line-through' : '' }}>
      {task.name}
    </p>
    <button
      style={{ margin: '5px 7px', padding: '0 5px' }}
      type="button"
      onClick={() => {
        dispatch({ type: ACTIONS.TOGGLE_TASK, id: task.id });
        inputRef.current.focus();
      }}
    >
      {task.complete ? 'Unmark' : 'Done'}

    </button>
    <button
      style={{ margin: '5px 7px', padding: '0 5px' }}
      type="button"
      onClick={() => {
        dispatch({ type: ACTIONS.DELETE_TASK, id: task.id });
        inputRef.current.focus();
      }}
    >
      Delete
    </button>
  </>
);

export default Task;
