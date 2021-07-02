import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../harcoded/heroes';


describe('Pruebas en funciones de héroes', () => {
    
    //Hay que evaluar todas las condiciones posibles

    test('Debe devolver un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( hero => hero.id === id );


        expect( heroe ).toEqual( heroeData );
    });

    test('Debe devolver un undefined si el héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );


        expect( heroe ).toBe( undefined );
    });

    test('Debe devolver los héroes de DC', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner( owner );
        const heroesData = heroes.filter( hero => hero.owner === owner);

        expect( heroesDC ).toEqual( heroesData );
    });


    test('Debe devolver el total de héroes de Marvel', () => {

        const cant = 2;
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner( owner );

        expect( heroesMarvel.length ).toEqual( cant );
    });
    
});
