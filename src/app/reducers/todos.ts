import {RootState} from "app/reducers/state";
import {handleActions} from "redux-actions";
import {TodoActions} from "app/actions";
import {TodoModel} from "app/models";

const initialState: RootState.TodoState = [];

export const todosReducer = handleActions<RootState.TodoState, any>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      let todo: TodoModel = {
        id: state.length,
        todo: action.payload.todo,
        checked: action.payload.checked
      };
      return [...state, todo];
    },
    [TodoActions.Type.EDIT_TODO]: (state, action) => {
      return state.map((item) => {
        if (item.id == action.payload.id) {
          return {...item, ...action.payload};
        }
        return item
      });
    },
    [TodoActions.Type.CHECK_TODO]: (state, action) => {
      return state.map((item) => {
        if (item.id == action.payload.id) {
          return {...item, ...action.payload};
        }
        return item
      });
    }
  },
  initialState
);
