export function remove(bugToRemove){
    const action = { type : 'REMOVE_BUG', payload : bugToRemove};
    return action;
}