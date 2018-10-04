/* eslint-disable no-constant-condition */

import { fork } from 'redux-saga/effects';
import localesSaga from './locales';
import todosSaga from './todos';

export default function* root() {
  yield fork(localesSaga);
  yield fork(todosSaga);
}
