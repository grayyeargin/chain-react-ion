import React, { Component } from 'react'
import * as d3 from 'd3'

export default class NeededLine extends React.Component{
	constructor(props) {
		super(props)

    this.renderNeededLine = this.renderNeededLine.bind(this)
  }

  componentDidMount() {
    this.renderNeededLine(this.props.xScale, this.props.scoreNeeded)
  }

  componentWillReceiveProps(NextProps) {
    this.renderNeededLine(NextProps.xScale, NextProps.scoreNeeded)
  }

  renderNeededLine(xScale, scoreNeeded) {
    let node  = this.refs.scoreNeeded

    d3.select(node).style("stroke-dasharray", ("3, 3"))
      .attr({ x1: xScale(scoreNeeded), y1: 0, x2: xScale(scoreNeeded), y2: 40 });
  }

  render() {
  	let xPosition = this.props.xScale(this.props.scoreNeeded),
  		textPosition = "translate(" + (xPosition - 15) + ",50)rotate(0)"

  	return (
  		<g>
    		<line className="score-line" ref="scoreNeeded" x1={xPosition} y1="0" x2={xPosition} y2="30"></line>
    		<text className="score-line-text" transform={textPosition}>Needed</text>
    	</g>
  	)
  }
}