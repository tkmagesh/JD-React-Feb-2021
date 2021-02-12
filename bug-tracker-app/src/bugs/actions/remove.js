import * as bugApi from '../services/bugApi';

export function remove(bugToRemove){
    /* return function(dispatch, getState){
        bugApi
            .remove(bugToRemove)
            .then(function(){
                bugApi
                    .getAll()
                    .then(function(bugs){
                        const action = { type : 'INIT_BUG', payload : bugs};
                        dispatch(action);
                    });
            })
    } */

    return async function(dispatch, getState){
        await bugApi.remove(bugToRemove)
        const bugs = await bugApi.getAll();
        const action = { type : 'INIT_BUG', payload : bugs};
        dispatch(action);
    }
}