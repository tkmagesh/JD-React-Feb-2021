const initialState = {
    selectedProject : 0,
    filterBugs : false
}

function filterBugsReducer(currentState = initialState, action){
    if (action.type === 'SET_SELECTED_PROJECT'){
        return { ...currentState, selectedProject : action.payload };
    }
    if (action.type === 'SET_FILTER_BUGS'){
        return {...currentState, filterBugs : action.payload}
    }
    return currentState;
}

export default filterBugsReducer;