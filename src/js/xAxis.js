import React, { Component } from 'react'
import * as d3 from 'd3'

export default class XAxis extends React.Component{
	constructor(props) {
		super(props)

		this.renderAxis = this.renderAxis.bind(this)
  }

  componentDidMount() {
    this.renderAxis(this.props)
  }

  componentWillReceiveProps(NextProps) {
    this.renderAxis(NextProps)
  }

  renderAxis(props) {
  	let node  = this.refs.xaxis

    d3.select(node).call(d3.axisBottom(props.xScale).tickSize(0).tickValues([0, props.scoreNeeded, props.ballCount]))
  }

  render() {
  	return (
    		<g className="axis x" ref="xaxis" transform={"translate(0, " + (this.props.chartHeight) + ")"}></g>
  	)
  }
}