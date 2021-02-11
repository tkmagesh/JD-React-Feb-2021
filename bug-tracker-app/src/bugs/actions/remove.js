export function remove(bugToRemove){
    return function(storeState){
        const bugs = storeState;
        const updatedBugs = bugs.filter(bug => bug.id !== bugToRemove.id)
        const action = { type : 'INIT_BUG', payload : updatedBugs};
        return action;
    }
}