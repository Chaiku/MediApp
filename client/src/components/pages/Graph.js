import React, { Component } from 'react';
import LineChart from '../LineChart';
import axios from 'axios';
import '../../App.scss';

class Graph extends Component {
  state = {
    graphData: []
  }

  get2011Spending = () => {
    return axios.get(`/api/drugs/2011/${this.props.drugName}`)
      .then(response => {
        return response.data
      })
      .catch((error) => console.log(error) );
  }

  get2012Spending = () => {
    return axios.get(`/api/drugs/2012/${this.props.drugName}`)
      .then(response => {
        return response.data
      })
      .catch((error) => console.log(error) );
  }

  get2013Spending = () => {
    return axios.get(`/api/drugs/2013/${this.props.drugName}`)
      .then(response => {
        return response.data
      })
      .catch((error) => console.log(error) );
  }

  get2014Spending = () => {
    return axios.get(`/api/drugs/2014/${this.props.drugName}`)
      .then(response => {
        return response.data
      })
      .catch((error) => console.log(error) );
  }

  get2015Spending = () => {
    return axios.get(`/api/drugs/2015/${this.props.drugName}`)
      .then(response => {
        return response.data
      })
      .catch((error) => console.log(error) );
  }

  componentDidMount() {
    Promise.all([
      this.get2011Spending(),
      this.get2012Spending(),
      this.get2013Spending(),
      this.get2014Spending(),
      this.get2015Spending(),
    ]).then(values => {
      let data = values.map((value, index) => {
        let year = 2010 + (index + 1);
        return {
          x: value[0].total_spending,
          y: year
        }
      })

      this.setState({ graphData: data })
    })
  }

  render() {
    return (
      <div className="graph">
        <div className="header">Test React SVG Chart</div>
        <LineChart svgWidth={50} data={this.state.graphData} />
      </div>
    );
  };

};

export default Graph;

      /*
      */
