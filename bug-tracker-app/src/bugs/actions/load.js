import axios from 'axios';
import * as bugApi from '../services/bugApi';

function getLocalBugs(){
    return [
        {
            id : 1,
            name : 'Local Bug - 1',
            isClosed : false,
            createdAt : new Date(),
            projectId : 1
        },
        {
            id : 2,
            name : 'Local Bug - 2',
            isClosed : true,
            createdAt : new Date(),
            projectId : 1
        }
    ]
}

function getRemoteBugs() /* returning a promise */{
    return axios.get('http://localhost:3030/bugs')
        .then(function(response){
            return response.data;
        });
}

export function load(){
    /* 
    const bugs = getLocalBugs();
    const action = { type : 'INIT_BUG', payload : bugs };
    return action; 
    */
    /* return function(dispatch){
        const p = getRemoteBugs();
        return p.then(function(bugs){
            const action = { type : 'INIT_BUG', payload : bugs };
            dispatch(action);
        });
    } */

    return function(dispatch){
        bugApi
            .getAll()
            .then(function(bugs){
                const action = { type : 'INIT_BUG', payload : bugs };
                dispatch(action);
            })

    }
    
}