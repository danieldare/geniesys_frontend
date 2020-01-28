import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'antd/dist/antd.css';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider, initialState, reducer } from './store';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
