export function removeClosed(bugs /* To be fixed */){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed);
    const action = { type : 'INIT_BUG', payload : bugsToRetain };
    return action;
}