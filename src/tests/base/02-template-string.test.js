
//Para tener ayudas de funciones
import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    

    test('getSaludo debe devolver Hola Elisabet', () => {
        
        const nombre = 'Elisabet';

        const saludo = getSaludo( nombre );
        console.log( saludo );
        expect( saludo ).toBe( 'Hola ' + nombre );
    })

    //getSaludo deve devolver Hola Carlos si no hay argumentos en el nombre
    test('getSaludo debe devolver Hola Carlos si nombre viene vacio', () => {
        
        const saludo = getSaludo();
        console.log( saludo );
        expect( saludo ).toBe( 'Hola Carlos' );
    })

    
});
