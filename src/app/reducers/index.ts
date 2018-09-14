import { combineReducers } from 'redux';
import { RootState } from './state';
import { routerReducer, RouterState } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux';
import { localesReducer } from './locales';
import {todosReducer} from "app/reducers/todos";

export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  router: routerReducer as any,
  intl: intlReducer,
  locales: localesReducer,
  todos: todosReducer as any
});
