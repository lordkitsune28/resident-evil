import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouters } from './routers/AppRouters';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import "./style/style.css"

ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  document.getElementById('root')
);