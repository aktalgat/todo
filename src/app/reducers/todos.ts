import { RootState } from 'app/reducers/state';
import { handleActions } from 'redux-actions';
import { TodoActions } from 'app/actions';
import { TodoModel } from 'app/models';

const initialState: RootState.TodoState = {
  todos: [],
  focusItem: '',
  title: ''
};

export const todosReducer = handleActions<RootState.TodoState, any>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      if (action.payload.id == state.todos.length - 1 && !action.payload.checked) {
        return { ...state, focusItem: 'new' };
      }
      let todo: TodoModel = {
        id: state.todos.length,
        todo: action.payload.todo,
        checked: action.payload.checked
      };
      let newTodos = [...state.todos];
      if (action.payload.id != undefined) {
        newTodos.splice(action.payload.id + 1, 0, todo);
      } else {
        newTodos.push(todo);
      }
      let temp = newTodos.map((item, index) => {
        item.id = index;
        return item;
      });

      return { ...state, todos: temp, focusItem: '' + todo.id };
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

    [TodoActions.Type.EDIT_TITLE]: (state, action) => {
      return {...state, title: action.payload.title};
    },

    [TodoActions.Type.BLUR_NEW_ITEM]: (state, action) => {
      return {...state, ...action.payload};
    }
  },
  initialState
);
