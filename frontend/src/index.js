import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import store,{persistor} from "./redux/store"


ReactDOM.render(
  <Provider store = {store}>
     <PersistGate loading={null} persistor={persistor}>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
    </PersistGate>
  </Provider>

,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
