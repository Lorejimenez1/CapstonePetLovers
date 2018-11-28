import {
		fetchPets,
		fetchPetsSuccess,
		FETCH_PETS_SUCCESS
} from './index';

describe('fetchPetsSuccess', () => {
    it('Should return the action', () => {
        const pets = {
           	pets: []
        };
        const action = fetchPetsSuccess(pets);
        expect(action.type).toEqual(FETCH_PETS_SUCCESS);
        expect(action.pets).toEqual(pets);
    });
});