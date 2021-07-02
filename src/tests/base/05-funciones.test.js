import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    
    test('Debe devolver un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        console.log( user );

        //Para comparar el objeto, las mismas propiedades y los mismos valores
        expect( user ).toEqual( userTest );

    })
    
    //getUsuarioActivo debe devolver un objeto
    test('Debe devolver un objeto', () => {

        const nombre = 'Elisabet';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo( nombre );

        console.log( user );

        expect( user ).toEqual( userTest );

    })
    

})
