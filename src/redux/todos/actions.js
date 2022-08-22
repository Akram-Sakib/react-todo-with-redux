import {
  ADDED,
  CLEARCOMPLETED,
  COMPLETEALL,
  REMOVETODO,
  SELECTEDCOLOR,
  TOGGLED,
} from "./actionTypes";

export const added = (text) => {
  return {
    type: ADDED,
    payload: text,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const selectedColor = (todoId, color) => {
  return {
    type: SELECTEDCOLOR,
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVETODO,
    payload: todoId,
  };
};

export const completeAll = () => {
  return {
    type: COMPLETEALL,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
