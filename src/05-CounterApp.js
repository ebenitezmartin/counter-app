//Informacion sobre eventos:
//https://es.reactjs.org/docs/events.html

import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {


    const handleAdd = (e) => {
        console.log(e);
        // return () => console.log('Hola mundo');
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            {/* si se pone handleApp() y la funcion no tiene un return 
            al momento de renderizarlo va a ejecutar una funcion la 
            cual aun no lo tiene definido*/}
            <button onClick={ handleAdd }> +1 </button>
            {/* <button onClick={ handleApp() }> +1 </button> */}
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp;