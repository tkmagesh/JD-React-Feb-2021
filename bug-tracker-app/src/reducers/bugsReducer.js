function bugsReducer(currentState = [], action){
    if (action.type === 'ADD_BUG'){
        return [...currentState, action.payload];
    }
    if (action.type === 'REPLACE_BUG'){
        return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
    }
    /* if (action.type === 'REMOVE_BUG'){
        return currentState.filter(bug => bug.id !== action.payload.id);
    } */
    if (action.type === 'INIT_BUG'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;