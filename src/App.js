import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between">
          <img src={logo} className={styles.image} alt={'COVID-19'} />
          <div className="mt-5 mt-md-auto">
            <CountryPicker
              handleCountryChange={this.handleCountryChange.bind(this)}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className="my-3">
            <Cards data={data} />
          </div>
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}
