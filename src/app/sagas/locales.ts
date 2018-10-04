import { call, fork, takeEvery } from 'redux-saga/effects';
import { LocaleActions } from 'app/actions';
import api from '../api';

export function* setLocale(data: any) {
  yield call(api.locales.set, data.payload);
}

export function* watchSetLocale() {
  yield takeEvery(LocaleActions.Type.SET_LOCALE, setLocale);
}

export default function* root() {
  yield fork(watchSetLocale);
}
