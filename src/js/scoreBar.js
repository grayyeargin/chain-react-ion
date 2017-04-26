import React from 'react'
import * as d3 from 'd3'

export default class ScoreBar extends React.Component{
	constructor(props) {
		super(props)

    // this.renderNeededLine = this.renderNeededLine.bind(this)
  }

  componentDidMount() {
    // this.renderNeededLine(this.props.xScale, this.props.scoreNeeded)
  }

  componentWillReceiveProps(NextProps) {
    // this.renderNeededLine(NextProps.xScale, NextProps.scoreNeeded)
  }

  render() {
  	let scoreWidth = this.props.xScale(this.props.score),
    rectStyle = {
      fill: this.props.score >= this.props.scoreNeeded ? '#7FFF00' : '#FF0000'
    }

  	return (
    		<rect style={rectStyle} className="chart-bar" ref="scoreBar" x="0" y="5" height="20" width={scoreWidth}></rect>
  	)
  }
}