import * as bugApi from '../services/bugApi';

export function toggle(bugToToggle){
    return function(dispatch){
        const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        bugApi.save(toggledBugData)
            .then(function(toggledBug){
                const action = { type : 'REPLACE_BUG', payload : toggledBug };
                dispatch(action);
            })
        
    }
}