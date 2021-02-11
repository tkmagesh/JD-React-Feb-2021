let currentBugId = 0;
export function addNew(newBugName){
    const newBug = {
        id : ++currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    };
    const action = { type : 'ADD_BUG', payload : newBug };
    return action;
}