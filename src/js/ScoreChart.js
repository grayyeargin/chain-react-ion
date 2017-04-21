import React from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'
import XAxis from './XAxis'
import ScoreBar from './scoreBar'
import NeededLine from './NeededLine'


export class ScoreChart extends React.Component {
	constructor(props) {
    super(props)
    this.height = 30
  }

	render() {
		const xScale = d3.scaleLinear()
											.domain([0, this.props.ballCount])
      								.range([0, this.props.width]);
		return (
			<div id="score-chart">
				<svg className="svg-chart" width={this.props.width} height={(this.height + 10)}>
					<XAxis {...this.props} chartHeight={this.height} xScale={xScale} />
					<ScoreBar score={this.props.score} xScale={xScale} />
					<NeededLine {...this.props} chartHeight={this.height} xScale={xScale} />
				</svg>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		score: state.score,
		scoreNeeded: state.scoreNeeded,
		ballCount: state.ballCount,
		width: state.boardSettings.width
	}
}

export default connect(mapStateToProps)(ScoreChart)