import {createAction} from "redux-actions";

export namespace TodoActions {
  export enum Type {
    ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO'
  }

  export const add = createAction(Type.ADD_TODO, (todo: any) => todo);
  export const edit = createAction(Type.EDIT_TODO, (todo: any) => todo);
}
