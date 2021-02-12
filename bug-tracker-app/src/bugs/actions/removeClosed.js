import * as bugApi from '../services/bugApi';

export function removeClosed(){
    return async function(dispatch, getState){
        const bugs = getState().bugs;
        const promises = bugs
            .filter(bug => bug.isClosed)
            .map(closedBug => bugApi.remove(closedBug));

        await Promise.all(promises);
        const serverBugs = await bugApi.getAll();
        const action = { type : 'INIT_BUG', payload : serverBugs };
        dispatch(action);
    }
}