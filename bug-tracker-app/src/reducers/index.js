import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import projectsReducer from './projectsReducer';
import filterBugsReducer from './filterBugsReducer';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer,
    filterBugs : filterBugsReducer
});

export default rootReducer;