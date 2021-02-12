import React, { useState } from 'react';
import {
  Button, Col, Form,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../store/store';
import { TodoList } from '../TodoList';

export const CreateTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addNewTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      title: inputValue,
      completed: false,
    }));
    setInputValue('');
  };

  return (
    <div className="text-center">
      <h1>Add new task</h1>
      <Form>
        <Form.Row className="align-items-center">
          <Col sm={6} className="my-1">
            <Form.Control type="text" placeholder="Input task" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          </Col>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addNewTodo();
            }}
          >
            Add todo
          </Button>

        </Form.Row>
      </Form>

      <TodoList />
    </div>

  );
};
