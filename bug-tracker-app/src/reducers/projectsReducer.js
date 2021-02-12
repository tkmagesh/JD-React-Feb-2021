function projectsReducer(currentState = [], action){
    if (action.type === 'PROJECT_INIT') return action.payload;
    return currentState;
}

export default projectsReducer;