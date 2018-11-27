import React from 'react';
import {shallow, mount} from 'enzyme';

import AddForm from './form';

describe('<AddFormForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddForm />);
    });
    it('Renders the search form with inputs/labels ', () => {
    	const wrapper = shallow(<AddForm />);
    	expect(wrapper.hasClass('add-form')).toEqual(true);
    });
});
