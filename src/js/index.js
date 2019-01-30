import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import Header from './components/header'
import Board from './components/board'
import ScoreChart from './components/scoreChart'
import Layover from './components/layover'

import '../css/base.scss';

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Header/>
			<Board/>
			<ScoreChart/>
			<Layover/>
	  </div>
	 </Provider>,
  document.getElementById('root')
)
