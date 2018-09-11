import { createAction } from 'redux-actions';

export namespace LocaleActions {
  export enum Type {
    SET_LOCALE = '@@intl/UPDATE',
    UPDATE_LOCALES = 'UPDATE_LOCALES'
  }

  export const update = createAction(Type.UPDATE_LOCALES, (locales: any) => locales);
}
