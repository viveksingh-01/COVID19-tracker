import React from 'react';
import { fetchDailyData } from './../../api';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';

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

  lineChart() {
    const { dailyData } = this.state;
    const graphData = {
      labels: dailyData.map((item) => item.date),
      datasets: [
        {
          data: dailyData.map((item) => item.confirmed),
          label: 'Confirmed',
          fill: true
        },
        {
          data: dailyData.map((item) => item.deaths),
          label: 'Deaths',
          fill: true
        }
      ]
    };
    return <Line data={graphData} />;
  }

  render() {
    return <div className={styles.container}>{this.lineChart()}</div>;
  }
}

export default Chart;
