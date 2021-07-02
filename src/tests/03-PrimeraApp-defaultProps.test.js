import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import PrimeraApp from '../03-PrimeraApp-defaultProps';

describe('Pruebas en <PrimeraApp />', () => {
    
    /**
     * Este test solo funcionará con @testing-library/jest-dom/extend-expect en el setupTests.js
     */

    // test('Debe mostrar el mensaje Hola soy Eli', () => {
      
    //     const saludo = 'Hola, soy Eli';

    //     //Producto renderizado que se devuelve - función
    //     // const wrapper = render(<PrimeraApp saludo = { saludo } />);

    //     //Con esto sabemos si existe el saludo en este componente.
    //     const { getByText } = render(<PrimeraApp saludo = { saludo } />);
        
    //     //Con esto sabemos si existe el saludo en este componente.
    //     // wrapper.getByText( saludo );

        
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })
    
    //Pruebas con Enzyme - crea snapshoots con el estado actual de mi componente

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
      
        const saludo = 'Hola, soy Eli';

        //Producto renderizado que se devuelve - función
        //Es muy parecido al render
        const wrapper = shallow( <PrimeraApp saludo = { saludo }/> );

        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe mostrar el subtitulo enviado por props', () => {
      
        const saludo = 'Hola, soy Eli';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp 
            saludo = { saludo }
            subtitutlo = { subtitulo }
             /> 
        );

        //Esto funciona como el document.querySelector, busca <p></p>
        const textoParrafo = wrapper.find( 'p' ).text();

        expect( textoParrafo ).toBe( subtitulo );

    })
})
