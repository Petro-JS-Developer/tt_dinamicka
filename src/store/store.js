import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { data } from '../api/data';

/* Actions */
const SET_LIST_TODO = 'SET_LIST_TODO';
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const IS_EDIT_TODO = 'IS_EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

/* Action Creator */
export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const updateTodo = (allTodo) => ({
  type: UPDATE_TODO,
  allTodo,
});

export const isEditTodoAC = (boolValue) => ({
  type: IS_EDIT_TODO,
  boolValue,
});

export const delTodoActionCreator = (id) => ({
  type: DELETE_TODO,
  id,
});

const initialState = {
  allTodo: [],
  isEditTodo: false,
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

    case UPDATE_TODO:
      return {
        ...state, allTodo: action.allTodo,
      };

    case DELETE_TODO:
      return {
        ...state, allTodo: state.allTodo.filter((todo) => todo.id !== action.id),
      };

    case IS_EDIT_TODO:
      return {
        ...state, isEditTodo: action.boolValue,
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
export const isEditTodo = (state) => state.isEditTodo;

/* Thunk */
export const asyncGetTodo = () => async (dispatch) => {
  await setTimeout(() => {
    dispatch({
      type: SET_LIST_TODO,
      data,
    });
  }, 2000);
};
