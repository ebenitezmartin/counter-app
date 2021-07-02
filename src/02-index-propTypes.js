import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './02-PrimeraApp-propTypes';

import './index.css';

const divRoot = document.querySelector('#root');

//Si definimos las propiedades como string y enviamos numero aparecerá un warning
// ReactDOM.render( <PrimeraApp saludo = { 123 } />, divRoot );

//Esto dará error ya que hemos definido la propiedad como isRequired y no la estamos mandando
// ReactDOM.render( <PrimeraApp />, divRoot );

ReactDOM.render( <PrimeraApp saludo = "Hola mundo" />, divRoot );