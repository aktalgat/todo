import {RootState} from "app/reducers/state";
import {handleActions} from "redux-actions";
import {TodoActions} from "app/actions";
import {TodoModel} from "app/models";

const initialState: RootState.TodoState = [];

export const todosReducer = handleActions<RootState.TodoState, any>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      console.log('state: {}', state);
      console.log('action: {}', action);
      let todo: TodoModel = {
        id: state.length,
        todo: action.payload.todo,
        checked: false
      };
      return [...state, todo];
    },
    [TodoActions.Type.EDIT_TODO]: (state, action) => {
      console.log('edit state: {}', state);
      console.log('edit action: {}', action);

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
