import { createStore, applyMiddleware, combineReducers } from 'redux';
import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';
import filterBugsReducer from '../reducers/filterBugsReducer';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer,
    filterBugs : filterBugsReducer
});


const loggerMiddleware = store => next => action => {
    console.log('before -> ', store.getState());
    console.log('action -> ', action);
    next(action);
    console.log('after -> ', store.getState());
    console.groupEnd();
};

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch, store.getState);
    } else {
        return next(action);
    }
}

const promiseMiddleware = store => next => action => {
    if (action instanceof Promise){
        action.then(actionObj => store.dispatch(actionObj));
    } else {
        return next(action);
    }
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));

window['store'] = store;

export default store;

