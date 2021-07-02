import React from 'react';
import PropTypes from 'prop-types';

//1ª forma para establecer un valor por defecto
// const PrimeraApp = ( { saludo, subtitulo = 'Soy un subtitulo' } ) => {

const PrimeraApp = ( { saludo, subtitulo } ) => { 


    return (
        <>
            <h1> { saludo } </h1>
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//2ª forma para establecer un valor por defecto
PrimeraApp.defaultProps= {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;