import { RouterState } from 'react-router-redux';
import {TodoModel} from "app/models";

export interface RootState {
  router: RouterState;
  intl: any;
  locales: RootState.LocaleState;
  todos: RootState.TodoState;
}

export namespace RootState {
  export type LocaleState = any;
  export type TodoState = TodoModel[];
}
