// los use... son hooks (Funciona a partir de react 16.8)
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    //El useState devuelve un array[]
    const [ counter, setCounter ] = useState( 0 );

    const handleAdd = () => {

        //No se hace counter++; por que en realidad lo que ocurre es counter = counter + 1
        //y no se permite cambiar el valor a una constante
        //Esto y...
        setCounter( counter + 1 );
        //...esto hacen lo mismo
        // setCounter( (c) => c + 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp;