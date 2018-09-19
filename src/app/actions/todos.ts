import { createAction } from 'redux-actions';

export namespace TodoActions {
  export enum Type {
    ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO',
    CHECK_TODO = 'CHECK_TODO',
    DELETE_TODO = 'DELETE_TODO',

    EDIT_TITLE = 'EDIT_TITLE'
  }

  export const add = createAction(Type.ADD_TODO, (todo: any) => todo);
  export const editTodo = createAction(Type.EDIT_TODO, (todo: any) => todo);
  export const check = createAction(Type.CHECK_TODO, (todo: any) => todo);

  export const editTitle = createAction(Type.EDIT_TITLE, (title: any) => title);
}
