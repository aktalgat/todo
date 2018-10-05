import { RootState } from 'app/reducers/state';
import { handleActions } from 'redux-actions';
import { TodoActions } from 'app/actions';

const initialState: RootState.TodoState = {
  todos: [],
  title: ''
};

export const todosReducer = handleActions<RootState.TodoState, any>(
  {
    [TodoActions.Type.GET_ALL_DONE]: (state, action) => {
      const { list, title } = action.payload;
      return { ...state, todos:  list, title: title };
    },
    [TodoActions.Type.ADD_TODO_DONE]: (state, action) => {
      const { list } = action.payload;
      return { ...state, todos:  list};
    },
    [TodoActions.Type.EDIT_TODO]: (state, action) => {
      let todos = state.todos.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return { ...state, todos: todos };
    },
    [TodoActions.Type.CHECK_TODO_DONE]: (state, action) => {
      return { ...state, todos: action.payload.list };
    },
    [TodoActions.Type.REMOVE_TODO_DONE]: (state, action) => {
      return { ...state, todos: action.payload.list};
    },

    [TodoActions.Type.EDIT_TITLE]: (state, action) => {
      return { ...state, title: action.payload.title };
    }
  },
  initialState
);
