import { createStore } from 'redux';
import rootReducer from '../reducers';
import rootMiddleware from './middlewares';

const store = createStore(rootReducer, rootMiddleware);

export default store;