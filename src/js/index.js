import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Board from './Board'

import '../css/base.scss';

ReactDOM.render(
	<div>
		<Header/>
		<Board/>
  </div>,
  document.getElementById('root')
)