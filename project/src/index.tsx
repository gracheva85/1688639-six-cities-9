import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOfferAction, checkAuthAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './services/browser-history';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
