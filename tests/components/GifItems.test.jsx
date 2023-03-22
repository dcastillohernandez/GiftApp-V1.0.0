import { render, screen } from "@testing-library/react"
import { GifItems } from "../../src/Components/GifItems"

describe('Pruebas en GifItems', () => { 
    
    const title ='Saitama'
    const url = 'https://naruto.com/Naruto'
    
    
    test('Debe de hacer math con el snapshot', () => { 
        const { container } = render( <GifItems title={ title } url={ url }   /> );
        expect( container ).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el url y el ALT indicado ', () => { 
        render( <GifItems title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole( 'img' ).src ).toBe( url );
        // expect( screen.getByRole( 'img' ).alt ).toBe( title );
        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Debe mostar un titulo en el componente ', () => {
        render( <GifItems title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    })
})






