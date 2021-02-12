import { createStore, applyMiddleware, combineReducers } from 'redux';
import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
});


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

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, stateMiddleware));
export default store;

