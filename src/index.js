import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'


import './index.css'
import * as serviceWorker from './serviceWorker'

import store from './redux/redux-store'
import { Provider } from 'react-redux';

  ReactDOM.render(
      <Provider store={store}>
        <App 
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </Provider>,
    document.getElementById('root')
  )


serviceWorker.unregister()
