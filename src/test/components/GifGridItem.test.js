import React from 'react'

import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('pruebas en <GifGridItem />', () => {

    const title = 'un titulo';
    const url = 'http://google.com';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )

    test('debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de contener un parrafo con el titulo', () => {
        const img = wrapper.find('img');
        expect( img.prop('src').trim()).toBe(url);
        expect( img.prop('alt').trim()).toBe(title);
    })

    test('la clase debe contener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    })

})