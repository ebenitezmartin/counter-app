import React from 'react';
//Los componentes se capitalizan en la primera letra
//2 tipos de componentes - Los que se componen por clases (class) y los que se componen por funciones (const)(functional components)
    /***
     * Solo retornará un objeto y siempre dentro de la misma linea, por lo que no podrá hacer esto:
     * return 
     *      <h1>Hola Mundo</h1>;
     * 
     * Para permitir enviar la etiqueta en otra linea debemos usar () e introducir el objeto dentro.
     * 
     * return (
     *      <h1>Hola Mundo</h1>
     * );
     * 
     * Sin embargo esto no permitirá incluir varias etiquetas, para ello usaremos una de las dos formas siguientes:
     * return (
     *      <div>
     *          <h1>Hola Mundo</h1>
     *          <p>Mi primera APP</p>
     *      </div>
     * );
     * 
     * O bien importando la libreria (Esto solo funcionará con React 16.2.00 minimo):
     * 
     * import React, { Fragment } from 'react';

     * return (
     *      <Fragment>
     *          <h1>Hola Mundo</h1>
     *          <p>Mi primera APP</p>
     *      </Fragment>
     * );
     * 
     * MEJOR FORMA, así evitamos colocar un div y nos ahorramos la importación de un Fragment:
     * 
     * return (
     *      <>
     *          <h1>Hola Mundo</h1>
     *          <p>Mi primera APP</p>
     *      </>
     * );
     * 
     */
// 1.
//const PrimeraApp = () => { 
// 2. Añadiendo properties
// const PrimeraApp = ( props ) => { 
// 3. Desestructuración - Hay que tener cuidado de que el componente padre envíe esa propiedad (se puede poner una por defecto)
const PrimeraApp = ( { saludo = 'Hola Mundo' } ) => { 

    //  1. Se puede incluir dentro del contenido del html mediante { saludo } dentro de las etiquetas <h1>{ saludo }</h1>
    // const saludo = 'Hola mundo';

    // 1-b. Para incluir un objeto nos valdremos de JSON.stringify()
    // const saludo2 = {
    //     nombre : 'Eli',
    //     edad : 31
    // }
    
    // 2. Estas props vienen del elemento padre PrimeraApp del index
    // console.log(props);

    return (
        <>
            {/* 0. Mostrando un string */}
            {/* <h1>Hola Mundo</h1> */}
            {/* 1. Mostrando la constante string */}
            {/* <h1> { saludo } </h1> */}
            {/* 1-b. Monstrando la constante objeto */}
            {/* <pre> { JSON.stringify( saludo2, null, 3 ) } </pre> */}
            {/* 2. Mostrando un campo del objeto que trae en las props*/}
            {/* <h1> { props.saludo } </h1> */}
            {/* 3. Mostrando mediante desestructuración */}
            <h1> { saludo } </h1>
            <p>Mi primera APP</p>
        </>
    );
}

export default PrimeraApp;