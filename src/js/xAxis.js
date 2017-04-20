import React, { Component } from 'react'
import * as d3 from 'd3'

export default class XAxis extends React.Component{
	constructor(props) {
		super(props)

		this.renderAxis = this.renderAxis.bind(this)
    this.renderNeededLine = this.renderNeededLine.bind(this)
  }

  componentDidMount() {
    this.renderAxis(this.props.xScale)
    this.renderNeededLine()
  }

  componentWillReceiveProps(NextProps) {
    this.renderAxis(NextProps.xScale)
  }

  renderAxis(xScale) {
  	let node  = this.refs.xaxis

    d3.select(node).call(d3.axisBottom(xScale))
  }

  renderNeededLine() {
    let node  = this.refs.scoreNeeded

    d3.select(node).style("stroke-dasharray", ("3, 3"))
      .attr("stroke-width", 2)
      .attr("stroke", "black")
  }

  render() {
  	return (
    		<g className="axis x" ref="xaxis" transform={"translate(0, " + (this.props.chartHeight) + ")"}></g>
  	)
  }
}