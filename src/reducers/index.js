import * as actions from '../actions';

const initialState = {
            pets: [],
            array: [],
            loading: false,
            error: "Could not load events"
};

export const eventReducer = (state=initialState, action) => {
	if (action.type === actions.FETCH_BOARD_SUCCESS) {
        return Object.assign({}, state, {
            array: action.array,
            loading: false,
            error: null
        });
    }
    else if (action.type === actions.FETCH_PETS_SUCCESS) {
        return Object.assign({}, state, {
            pets: action.pets,
            loading: false,
            error: null
        });
    }
     
    return state;
    
};