import React from 'react'
import * as d3 from 'd3'

export default class ScoreBar extends React.Component{
	constructor(props) {
		super(props)
  }

  render() {
  	let scoreWidth = this.props.xScale(this.props.score),
    rectStyle = {
      fill: this.props.score >= this.props.scoreNeeded ? '#7FFF00' : '#FF0000'
    }

  	return (
    		<rect style={rectStyle} className="chart-bar" ref="scoreBar" x="5" y="5" height="20" width={scoreWidth}></rect>
  	)
  }
}