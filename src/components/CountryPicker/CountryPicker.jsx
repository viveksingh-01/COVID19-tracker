import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../services';

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountryList = async () => {
      setCountries(await fetchCountries());
    };
    getCountryList();
  }, []);
  console.log(countries);

  return (
    <div>
      <h1>CountryPicker</h1>
    </div>
  );
};

export default CountryPicker;
