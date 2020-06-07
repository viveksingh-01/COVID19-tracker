import React from 'react';
import logo from '../../assets/images/covid-19.png';

const Logo = () => {
  return (
    <div className="d-flex flex-column">
      <img src={logo} style={{ width: '240px' }} alt={'COVID-19'} />
      <h5 className="d-flex justify-content-between flex-nowrap">
        <span>T</span>
        <span>R</span>
        <span>A</span>
        <span>C</span>
        <span>K</span>
        <span>E</span>
        <span>R</span>
      </h5>
    </div>
  );
};

export default Logo;
