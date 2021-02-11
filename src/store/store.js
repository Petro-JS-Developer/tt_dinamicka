import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { data } from '../api/data';

/* Actions */
const SET_LIST_TODO = 'SET_LIST_TODO';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

/* Action Creator */
export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const delTodoActionCreator = (id) => ({
  type: DELETE_TODO,
  id,
});

const initialState = {
  allTodo: [],
};

/* Reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_TODO:
      return {
        ...state, allTodo: action.data,
      };
    case ADD_TODO:
      return {
        ...state, allTodo: [...state.allTodo, action.todo],
      };
    case DELETE_TODO:
      return {
        ...state, allTodo: state.allTodo.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

/* Use selector */
export const allTODOS = (state) => state.allTodo;

/* Thunk */
export const asyncGetTodo = () => async (dispatch) => {
  await setTimeout(() => {
    dispatch({
      type: SET_LIST_TODO,
      data,
    });
  }, 2000);
};

store.subscribe(() => {
  console.log(store.getState());
});
