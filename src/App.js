import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cx from 'classnames';
import logo from './assets/images/covid-19.png';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './services';

import styles from './App.module.css';

export default class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  async handleCountryChange(country) {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={cx('container my-5', styles.container)}>
        <img src={logo} className={styles.image} alt={'COVID-19'} />
        <Cards data={data} />
        <CountryPicker
          handleCountryChange={this.handleCountryChange.bind(this)}
        />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
