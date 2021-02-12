import React, { useState } from 'react';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import {
  delTodoActionCreator, allTODOS, updateTodo, isEditTodo, isEditTodoAC,
} from '../../store/store';
import './styleTodo.scss';

export const Todo = ({ title, id, completed }) => {
  const [isEditTodos, setisEditTodos] = useState(false);
  const [inputValueTodo, setInputValueTodo] = useState(title);

  const dispatch = useDispatch();
  const allTodo = useSelector(allTODOS);
  const isEditTODO = useSelector(isEditTodo);

  const verification = () => {
    if (window.location.pathname === '/change_todos' && !isEditTODO) {
      setisEditTodos(true);
      dispatch(isEditTodoAC(true));
    } else {
      setisEditTodos(false);
    }
  };

  const handleSave = (e) => {
    if (e.code === 'Enter') {
      const updateArrTodos = allTodo.map((todo) => {
        if (todo.id === id) {
          todo.title = inputValueTodo;
        }
        return todo;
      });

      dispatch(updateTodo(updateArrTodos));
      dispatch(isEditTodoAC(false));
      setisEditTodos(false);
    }
    if (e.code === 'Escape') {
      setInputValueTodo(title);
      dispatch(isEditTodoAC(false));
      setisEditTodos(false);
    }
  };

  const handleChange = () => {
    const updateArrTodos = allTodo.map((todo) => {
      if (todo.id === id) {
        todo.completed = !completed;
      }
      return todo;
    });

    dispatch(updateTodo(updateArrTodos));
  };

  const deleteTodo = () => {
    dispatch(delTodoActionCreator(id));
  };

  return (
    <>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => { handleChange(); }}
          className="custom-control-input"
          id={id}
        />
        <label className="custom-control-label" htmlFor={id}>{}</label>
      </div>

      <span className={classnames(completed && 'completed')} onDoubleClick={() => verification()}>
        {isEditTodos ? (
          <input
            value={inputValueTodo}
            onChange={(e) => setInputValueTodo(e.target.value)}
            onKeyDown={(e) => handleSave(e)}
          />
        ) : title}
      </span>
      <button type="button" className="btn btn-danger" onClick={() => deleteTodo()}>×</button>
    </>
  );
};

Todo.propTypes = {
  title: PropType.string.isRequired,
  id: PropType.string.isRequired,
  completed: PropType.bool.isRequired,
};
