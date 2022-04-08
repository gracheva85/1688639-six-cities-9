import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import HistoryRouter from './components/history-route/history-router';
import browserHistory from './services/browser-history';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter basename="/1688639-six-cities-9" history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
