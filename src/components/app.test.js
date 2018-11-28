import React from 'react';
import {shallow} from 'enzyme';

import App from './app';
import List from './list';


describe('<App/>', () => {
    let seedLists = [];
   

    it('Renders without crashing', () => {
        shallow(<App/>);
    });

    
    it('Renders  title', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<App pets={[]} dispatch={dispatch} />);
        expect(wrapper.contains(<h1>Find your new Pet</h1>)).toEqual(true);
    }); 
});    