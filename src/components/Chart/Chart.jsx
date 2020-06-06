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
      labels: dailyData.map(({ date }) => date),
      datasets: [
        {
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Confirmed',
          borderColor: 'rgba(0, 0, 255, 0.5)',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          fill: true
        },
        {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
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
