import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../07-CounterApp';
import '@testing-library/jest-dom';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    //Se va a ejecutar antes de cada una de las evaluaciones de test para vaciar el contenido del valor
    beforeEach( () =>  {

        wrapper = shallow( <CounterApp /> );

    });

    test('Debe mostrar el componente <CounterApp /> correctamente', () => {
                
        expect( wrapper ).toMatchSnapshot();

    });
   
    
    test('Debe mostrar el valor por defecto de 100', () => {

        const valor = 100;
        const wrapper = shallow(
            <CounterApp
                value = { valor }
            />
        );

        //Aqui se está tomando todo el valor de ese h2 (incluidos los espacios), lo solucionamos con un .trim()
        const valorComponente = wrapper.find('h2').text().trim();

        //Lo que recibimos es un string, por tanto lo compararemos con otro string
        expect( valorComponente ).toBe( valor.toString() );
    });

    test('debe incrementar con el boton +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
        
    });
    
    test('debe decrementar con el botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');

    });


    test('debe colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow( <CounterApp value={ 105 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105');

    })



});


