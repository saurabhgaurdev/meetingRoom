import { createStore } from 'redux';
import combineReducer from '../reducers/combineReducer';


const store = createStore(combineReducer);
export default store;