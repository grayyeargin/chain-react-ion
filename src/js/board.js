import React from 'react'

export class Board extends React.Component {

	render() {
		return (
			<div className="board-container">
				<canvas id="game"></canvas>
			</div>
		)
	}
}

export default Board