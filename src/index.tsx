import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import './index.css';
import App from './App';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>, document.getElementById('root')
)
