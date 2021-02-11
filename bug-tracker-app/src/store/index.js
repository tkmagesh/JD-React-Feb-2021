import { createStore } from 'redux';
import bugsReducer from '../reducers/bugsReducer';

const store = createStore(bugsReducer);

export default store;

