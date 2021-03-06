import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import SocialJSApp from './App'

import './index.css'

ReactDOM.render(
  <SocialJSApp />,
  document.getElementById('root')
)

serviceWorker.unregister()
