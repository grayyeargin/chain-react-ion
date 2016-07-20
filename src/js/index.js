import 'babel-polyfill'
import React from 'react'
import configureStore from './store/index'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import '../css/base.scss';

const store = configureStore(InitialData)

ReactDOM.render(
  <Provider store={store}>
  	<div>
  		<Header/>
	  	<Board/>
	  </div>
  </Provider>,
  document.getElementById('root')
)