import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import Header from './Header'
import Board from './Board'

import '../css/base.scss';

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Header/>
			<Board/>
	  </div>
	 </Provider>,
  document.getElementById('root')
)
