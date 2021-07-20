import React from 'react';
import PropTypes from 'prop-types';
import ACTIONS from '../../ACTIONS';

const Task = ({ task, dispatch }) => (
  <>
    <p style={{ display: 'inline', textDecoration: task.complete ? 'line-through' : '' }}>
      {task.name}
    </p>
    <button
      style={{ margin: '5px 7px', padding: '0 5px' }}
      type="button"
      onClick={() => dispatch({ type: ACTIONS.TOGGLE_TASK, id: task.id })}
    >
      {task.complete ? 'Unmark' : 'Done'}

    </button>
    <button
      style={{ margin: '5px 7px', padding: '0 5px' }}
      type="button"
      onClick={() => dispatch({ type: ACTIONS.DELETE_TASK, id: task.id })}
    >
      Delete

    </button>
  </>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    complete: PropTypes.bool,
  })
    .isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Task;
