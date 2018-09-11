import { RouterState } from 'react-router-redux';

export interface RootState {
  router: RouterState;
  intl: any;
  locales: RootState.LocaleState;
}

export namespace RootState {
  export type LocaleState = any;
}
