import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './containers/header'

import '../css/base.scss';

ReactDOM.render(
	<div>
		<Header/>
  </div>,
  document.getElementById('root')
)