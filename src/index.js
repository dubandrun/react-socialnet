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
      addPost={store.addPost.bind(store)}
      updatePostText={store.updatePostText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

serviceWorker.unregister()
