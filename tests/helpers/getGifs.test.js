import { getGifs } from '../../src/helpers/getGifs';
import fetch from 'isomorphic-fetch';

describe('Pruebas en getGifs()', () => {
    
    test('Debe retornar un arreglo de Gifs', async() => { 
        const gifs = await getGifs( 'One Punch' );
        // console.log( gifs );
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0]).toEqual({
            id:expect.any( String ) ,
            title:expect.any( String ) ,
            url:expect.any( String ) ,
        });
    })

    test('verificar respuesta HTTP en URL', async () => {
        const gifs = await getGifs( 'One Punch' );
        const response = await fetch(gifs[0].url);
        expect(response.ok).toBe(true);
    });
})


