export function removeClosed(){
    return function(storeState){
        const bugs = storeState;
        const bugsToRetain = bugs.filter(bug => !bug.isClosed);
        const action = { type : 'INIT_BUG', payload : bugsToRetain };
        return action;
    }
}