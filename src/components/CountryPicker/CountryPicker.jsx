import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../services';

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountryList = async () => {
      setCountries(await fetchCountries());
    };
    getCountryList();
  }, []);

  return (
    <div className="mb-3">
      <FormControl>
        <NativeSelect>
          <option value="global">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
