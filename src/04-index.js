import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './04-CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value = { 1234 } />, divRoot );