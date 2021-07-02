import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './03-PrimeraApp-defaultProps';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimeraApp saludo = "Hola mundo" />, divRoot );