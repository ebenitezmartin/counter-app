// npm run test
//Docu jest - https://jestjs.io/es-ES/docs/expect
// https://archive.jestjs.io/docs/en/24.x/expect

describe( 'Pruebas en el archivo demo.test.js', () => {

    test( 'deben de ser iguales los string ', () => {
    
        // 1. inicialización
        const mensaje = 'Hola mundo';
    
        // 2. estímulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); //Espera que el contenido el mismo
    
    
    })
    
});

