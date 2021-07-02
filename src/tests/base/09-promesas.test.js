import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../harcoded/heroes';

describe('Pruebas con promesas', () => {

    /**
     * Al probar una tarea asíncrona debemos tener en cuenta que en los test siempre las va a tratar como síncronas
     * por tanto, irá linea a linea y llegará al expect mientras aun no terminó de ejcutar el getHeroeByIdAsync
     * Para solucionar esto se colocara el 'done' como parámetro del test
     * */

    test('Debe devolver un héroe async ', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            /** 
             * Si eliminamos el expect, debemos colocar para determinar cuando acaba la promesa:
             * De todas formas siempre debe de llevarlo, aunque tenga su expect, por que puede ser que
             * haya más de un expect
             * */
            expect( heroe ).toBe( heroes[0] );

            done();
        })
    });

    test('Debe devolver un error si el héroe async por id no existe ', ( done ) => {

        const id = 10;

        getHeroeByIdAsync( id )
        .catch( err => {
            /** 
             * Si eliminamos el expect, debemos colocar para determinar cuando acaba la promesa:
             * De todas formas siempre debe de llevarlo, aunque tenga su expect, por que puede ser que
             * haya más de un expect
             * */
            expect( err ).toBe( 'No se pudo encontrar el héroe' );

            done();
        })
    });
    
});
