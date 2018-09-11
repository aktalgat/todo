import { handleActions } from 'redux-actions';
import { RootState } from 'app/reducers/state';
import { LocaleActions } from 'app/actions';

export const UPDATE = '@@intl/UPDATE';

const initialState: RootState.LocaleState = {};

export const localesReducer = handleActions<RootState.LocaleState, any>(
  {
    [LocaleActions.Type.UPDATE_LOCALES]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [UPDATE]: (state, action) => {
      return state;
    }
  },
  initialState
);
