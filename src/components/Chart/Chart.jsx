import React from 'react';
import { fetchDailyData } from './../../api';

class Chart extends React.Component {
  constructor() {
    super();
    this.state = { dailyData: [] };
  }

  async componentDidMount() {
    const data = await fetchDailyData();
    this.setState({
      dailyData: data
    });
    console.log(this.state.dailyData);
  }

  render() {
    return (
      <div>
        <h1>Chart</h1>
      </div>
    );
  }
}

export default Chart;
