import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { allTODOS } from '../../store/store';
import { Todo } from '../Todo/Todo';

export const TodoList = () => {
  const allTodos = useSelector(allTODOS);

  return (
    <ListGroup id="todoList">
      {allTodos.map((todo) => (
        <ListGroup.Item key={todo.id} className="d-flex justify-content-between">
          <Todo {...todo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
