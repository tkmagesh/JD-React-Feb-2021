let currentBugId = 0;
export function addNew(newBugName, projectId){
    const newBug = {
        id : ++currentBugId,
        name : newBugName,
        isClosed : false,
        projectId : projectId,
        createdAt : new Date()
    };
    const action = { type : 'ADD_BUG', payload : newBug };
    return action;
}