import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory  onNewCategory={ () => {} }/> );
        const input = screen.getByRole( 'textbox' );

        fireEvent.input( input,{ target:{ value:'Saintama' } } );
        expect( input.value ).toBe( 'Saintama' );
    })

    test('Debe de llamar el onNewCategory si el input tiene algun valor', () => {
        
        const inputValue = 'Saintama';
        const onNewCategory = jest.fn();


        render( <AddCategory  onNewCategory={ onNewCategory }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} });
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toBeCalledTimes(1);
        expect( onNewCategory ).toBeCalledWith( inputValue );
    })

    test('No debe llamar al onNewCategory si el input está vacio ', () => { 

        const onNewCategory = jest.fn();
        render( <AddCategory  onNewCategory={ onNewCategory }/> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();//otra posibilidad  
    })
})



