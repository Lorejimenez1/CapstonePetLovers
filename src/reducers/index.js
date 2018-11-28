import * as actions from '../actions';

const initialState = {
            pets: [],
            array: [],
            loading: false,
            error: null
};

export const eventReducer = (state=initialState, action) => {
	if (action.type === actions.FETCH_EVENTS_SUCCESS) {
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
      else if (action.type === actions.FETCH_PETS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
       else if (action.type === actions.FETCH_EVENTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
     
    return state;
    
};