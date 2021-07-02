import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './03-PrimeraApp-defaultProps';
import CounterApp from './07-CounterApp-handleSubtract-handleReset';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value = { 10 } />, divRoot );
// ReactDOM.render( <PrimeraApp saludo = 'Hola soy Eli' />, divRoot );