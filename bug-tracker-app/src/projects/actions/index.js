const projectsList = [
    {
        id : 1,
        name : 'Salary Calculator'
    },
    {
        id : 2,
        name : 'Payroll Master'
    }
];


export function load(){
    const action = { type : 'PROJECT_INIT', payload : projectsList};
    return action;
}