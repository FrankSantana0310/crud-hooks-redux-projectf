import {combineReducers} from 'redux';
import libroReducer from './libroReducer';
import validationReducer from './validationReducer';

const reducers = combineReducers({
   libreria:libroReducer,
   validation: validationReducer,
})

export default reducers