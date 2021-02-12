import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

export function getAll(){
    return axios.get(serviceEndPoint)
        .then(response => response.data);
}

export function getById(id){
    return axios.get(`${serviceEndPoint}/${id}`)
        .then(response => response.data);
}

export function save(bugData){
    if (bugData.id === 0){
        return axios.post(serviceEndPoint, bugData)
            .then(response => response.data);
    } else {
        return axios.put(`${serviceEndPoint}/${bugData.id}`, bugData)
            .then(response => response.data);
    }
}

export function remove(bugData){
    return axios.delete(`${serviceEndPoint}/${bugData.id}`)
            .then(response => response.data);
}