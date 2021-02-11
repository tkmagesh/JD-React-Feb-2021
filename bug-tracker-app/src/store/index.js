import { createStore, applyMiddleware } from 'redux';
import bugsReducer from '../reducers/bugsReducer';


/* function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.log(action);
            next(action);
        }
    }
} */

const loggerMiddleware = store => next => action => {
    console.log('before -> ', store.getState());
    console.log('action -> ', action);
    next(action);
    console.log('after -> ', store.getState());
    console.groupEnd();
};

const stateMiddleware = store => next => action => {
    if (typeof action === 'function'){
        const storeState = store.getState();
        const actionObj = action(storeState);
        store.dispatch(actionObj);
    } else {
        next(action);
    }
}

const store = createStore(bugsReducer, applyMiddleware(loggerMiddleware, stateMiddleware));
export default store;

