import {RootState} from "app/reducers/state";
import {handleActions} from "redux-actions";

const initialState: RootState.TodoState = [{
  todo: '',
  checked: false
}];

export const todosReducer = handleActions<RootState.TodoState, any>(
  {

  },
  initialState
);
