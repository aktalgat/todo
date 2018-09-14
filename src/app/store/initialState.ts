import { addLocaleData } from 'react-intl';
import api from '../api';
import {RootState} from "app/reducers";

const enLocaleData = require('react-intl/locale-data/en');
const ruLocaleData = require('react-intl/locale-data/ru');
addLocaleData([...enLocaleData, ...ruLocaleData]);

function getProp(obj: any, prop: string) {
  return obj[prop];
}

let locale = api.locales.getLanguage();
let localeData = api.locales.getLocales();

let messages = getProp(localeData, locale);

let todos: RootState.TodoState = [
  {
    todo: '',
    checked: false
  }];

export const initialState = {
  intl: {
    defaultLocale: locale,
    locale: locale,
    messages: messages
  },
  locales: localeData,
  todos: todos
};
