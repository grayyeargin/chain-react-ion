import React from 'react'

import Header from './components/header'
import Board from './components/board'
import ScoreChart from './components/scoreChart'
import Layover from './components/layover'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Board/>
				<ScoreChart/>
				<Layover/>
			</div>
		)
	}
}

export default App
