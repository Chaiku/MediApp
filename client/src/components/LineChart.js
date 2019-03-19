import React, { Component } from 'react';
import '../App.scss';

class LineChart extends Component {
    state = {
      color: '#2196F3',
      svgHeight: 800,
      svgWidth: 1000
    }

    //Get Max and Min for X
    getMinX() {
        const {data} = this.props;
        let xValues = data.map(val => {
          return val.x
        });

        return Math.min(...xValues);
    }

    getMaxX() {
        const {data} =  this.props;
        let xValues = data.map(val => {
          return val.x
        });

        return Math.max(...xValues);
    }

    //Get max and min for Y
    getMinY() {
        const {data} =  this.props;
        let yValues = data.map(val => {
          return val.y
        });

        return Math.min(...yValues);
    }

    getMaxY() {
        const {data} =  this.props;
        let yValues = data.map(val => {
          return val.x
        });
        return Math.max(...yValues);
    }

    //create SVG coordinate for each point in line graph//

    getSvgX(x) {
        return (x / this.getMaxX() * this.state.svgWidth);
    }

    getSvgY(y) {
        return this.state.svgHeight - (y / this.getMaxY() * this.state.svgHeight);
    }

    //craete SVG Path
    makePath() {
        // const {data, color} = this.props;
        let pathD = "M" + this.getSvgX(this.props.data[0].x) + " " +
    this.getSvgY(this.props.data[0].y) + " ";

    pathD += this.props.data.map((point,i ) => {
        return "L " + this.getSvgX(point.x) +  " " +
    this.getSvgY(point.y) + " ";
    });

    return (
        <path className="linechart_path" d={pathD} style={{stroke:this.state.color}} />
        );
    }

     //build grid axis
    makeAxis() {
        const minX = this.getMinX();
        const maxX = this.getMaxX();
        const minY = this.getMinY();
        const maxY = this.getMaxY();

        return (
            <g className="linechart_axis">
            <line
                x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
                x2={this.getSvgX(maxX)} y2={this.getSvgY(minY)} />
            <line
                x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
                x2={this.getSvgX(minX)} y2={this.getSvgY(maxY)} />
            </g>
        );
    }

    //render and return SVG path and axis
    render() {
        const {svgHeight, svgWidth} = this.state;
        const { data } = this.props;
        return (
          <div>
            {data[0] === undefined ? (
              <div>Waiting for data</div>
            ) : (
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                  {this.makePath()}
                  {this.makeAxis()}
              </svg>
            )}
          </div>
        );
    }
}

export default LineChart;
