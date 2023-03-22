import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 
    test('Debe verificar que no existe la nueva categoria ', () => { 
        render( <GifExpertApp /> );
        screen.debug();
    })
})