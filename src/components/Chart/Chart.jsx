import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../services';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const getDailyData = async () => {
      setDailyData(await fetchDailyData());
    };
    getDailyData();
  }, []);

  const lineChart = () => {
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
    return dailyData.length ? <Line data={graphData} /> : null;
  };

  return <div className={styles.container}>{lineChart()}</div>;
};

export default Chart;
