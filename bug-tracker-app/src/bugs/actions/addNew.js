import * as bugApi from '../services/bugApi';

export function addNew(newBugName, projectId){
    return function(dispatch){
        const newBugData = {
            id : 0,
            name : newBugName,
            isClosed : false,
            projectId : projectId,
            createdAt : new Date()
        };
        bugApi
            .save(newBugData)
            .then(function(newBug){
                const action = { type : 'ADD_BUG', payload : newBug };
                dispatch(action);
            })
        
    }
}