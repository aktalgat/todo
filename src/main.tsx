import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { App } from './app';
import { IntlProvider } from 'react-intl-redux';
import { initialState } from 'app/store/initialState';
import { RootState } from 'app/reducers';

// prepare store
const history = createBrowserHistory();
const store = configureStore(history, initialState as RootState);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
