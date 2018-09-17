import {RootState} from "app/reducers/state";
import {handleActions} from "redux-actions";
import {TodoActions} from "app/actions";

const initialState: RootState.TodoState = [];

export const todosReducer = handleActions<RootState.TodoState, any>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      console.log('state: {}', state);
      console.log('action: {}', action);
      return [{todo: action.payload.todo, checked: false}, ...state];
    }
  },
  initialState
);
