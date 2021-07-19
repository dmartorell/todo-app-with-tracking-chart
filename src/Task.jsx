import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onToggle, onDelete }) => (
  <>
    <p style={{ display: 'inline', textDecoration: task.complete ? 'line-through' : '' }}>
      {task.name}
    </p>
    <button style={{ margin: '5px 7px', padding: '0 5px' }} type="button" onClick={() => onToggle(task.id)}>{task.complete ? 'Unmark' : 'Done'}</button>
    <button style={{ margin: '5px 7px', padding: '0 5px' }} type="button" onClick={() => onDelete(task.id)}>Delete</button>
  </>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    complete: PropTypes.bool,
  })
    .isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
