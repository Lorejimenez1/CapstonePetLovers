import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


import {eventReducer} from './reducers';

export default createStore(eventReducer, applyMiddleware(thunk));