import { RootState } from 'app/reducers/state';
import { handleActions } from 'redux-actions';
import { TodoActions } from 'app/actions';

const initialState: RootState.TodoState = {
  todos: [],
  title: ''
};

export const todosReducer = handleActions<RootState.TodoState, any>(
  {
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
    [TodoActions.Type.CHECK_TODO]: (state, action) => {
      let todos = state.todos.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return { ...state, todos: todos };
    },
    [TodoActions.Type.DELETE_TODO]: (state, action) => {
      let newTodos = state.todos
        .filter((item) => item.id != action.payload.id)
        .map((item, index) => {
          item.id = index;
          return item;
        });
      return { ...state, todos: newTodos };
    },

    [TodoActions.Type.EDIT_TITLE]: (state, action) => {
      return { ...state, title: action.payload.title };
    }
  },
  initialState
);
