import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

/**
 * Esto no se probará directamente en el html, se probará con componentes de react
 * El getImagen es una función async por lo que devuelve una promesa, 
 * por tanto se resuelve como tal, o bien añadiendo async al test y el await a la función
 * 
 * */
describe('Pruebas con async-await y fetch', () => {
    
    test('Debe devolver la url de la imagen ', async() => {
        

        const url = await getImagen();
        console.log(url);

        expect( typeof url ).toBe( 'string' );
        expect( url.includes('https://') ).toBe( true );

    })
    
})
