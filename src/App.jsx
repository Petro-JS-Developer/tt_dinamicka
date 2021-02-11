import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { NaviBar } from './Components/NaviBar';
import { CreateTodo } from './Components/CreateTodo';
import { ChangeTodos } from './Components/ChangeTodos';
import { AboutTodo } from './Components/AboutTodo';

import { asyncGetTodo } from './store/store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetTodo());
  }, []);

  return (
    <Container className="my-auto">
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={CreateTodo} />
          <Route path="/change_todos" component={ChangeTodos} />
          <Route path="/about_todo" component={AboutTodo} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
