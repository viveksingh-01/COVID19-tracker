import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cx from 'classnames';
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

  handleCountryChange(country) {
    this.setState({ country });
    console.log(country);
  }

  render() {
    const { data } = this.state;
    return (
      <div className={cx('container', styles.container)}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}
