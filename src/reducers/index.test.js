import {eventReducer} from './index';
import {fetchPetsSuccess, fetchBoardSuccess} from '../actions';

describe('eventReducer', () => {
	
   
        

	 it('Should set the initial state when nothing is passed in', () => {
        const state = eventReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            pets: [],
            array: [],
            loading: false,
            error: "Could not load events"
        });
    });

	   it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = eventReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

     describe('fetchBoardSuccess', () => {
        it('Should replace the entire state', () => {
            const board =  ['list 1', 'list 2'];
            const expected = {"array": ["list 1", "list 2"], "error": null, "loading": false, "pets": []}
            const state = eventReducer(undefined, fetchBoardSuccess(board));
            expect(state).toEqual(expected);
        });
    });

    describe('fetchPetsSuccess', () => { 
    	 it('Should replace the entire state', () => {
    	 	const petArray = ['pet 1', 'pet 2'];
    	 	const expected =	{"array": [], "error": null, "loading": false, "pets": ['pet 1', 'pet 2']};

    	 	const state = eventReducer(undefined, fetchPetsSuccess(petArray));
            expect(state).toEqual(expected);
        });
	});
});    