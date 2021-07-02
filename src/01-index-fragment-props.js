import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './01-PrimeraApp-fragment-props';

import './index.css';


//Esto es JSX(Javascript+Xml), por lo que necesitaremos importar React para que lo interprete
// const saludo = <h1>Hola Mundo</h1>;
const divRoot = document.querySelector('#root');

//Para incluir la variable html (no se trata de un componente) en el html necesitaremos la libreria de ReactDOM para renderizarlo.
// ReactDOM.render(saludo, divRoot);

//Aquí si se trata de un componente por lo que usaremos < /> al llamarla 
// ReactDOM.render(<PrimeraApp />, divRoot);

//// 3. Desestructuración - Hay que tener cuidado de que el componente padre envíe esa propiedad (se puede poner una por defecto)
ReactDOM.render(<PrimeraApp saludo = 'Hola soy Eli' />, divRoot);