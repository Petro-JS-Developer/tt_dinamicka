import React from 'react';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { delTodoActionCreator } from '../../store/store';

export const Todo = ({ title, id }) => {
  const dispatch = useDispatch();

  const deleteTodo = (idTodo) => {
    dispatch(delTodoActionCreator(idTodo));
  };

  return (
    <>
      <span>{title}</span>
      <button type="button" className="btn btn-danger" onClick={() => deleteTodo(id)}>×</button>
    </>
  );
};

Todo.propTypes = {
  title: PropType.string.isRequired,
  id: PropType.number.isRequired,
};
