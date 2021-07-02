import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './06-CounterApp-hook';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value = { 1234 } />, divRoot );