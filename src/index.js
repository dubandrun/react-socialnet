import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'
import * as serviceWorker from './serviceWorker'

import store from './redux/state'

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
      state={state}
      dispatch={store.dispatch.bind(store)}
      store={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

serviceWorker.unregister()
