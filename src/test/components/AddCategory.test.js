import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";


describe('pruebas en <AddCategory />', ()=> {

    const setCategories = () => {}
    const wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    test('debe mostrarse correctamente', () => {
          
        expect( wrapper).toMatchSnapshot();

    })

    test('debe de cambiar la caja del texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{ target: { value }  });

    })
    
    
})