//var -> is NOT block scoped

for(var i=0; i<10; i++){
}

i
10
for(let x = 0; x < 10; x++){
}


x
VM2061:1 Uncaught ReferenceError: x is not defined
    at <anonymous>:1:1
(anonymous) @ VM2061:1
//const

const pi = 3.14

pi = 2
VM2129:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:4
(anonymous) @ VM2129:1
var nos = [3,1,4,2,5]

var [n1, n2] = nos

n1
3
n2
1
//Rest Operator
var [x1, x2, ...z ] = nos

x1
3
x2
1
z
(3) [4, 2, 5]

//spread operator
var newNos = [...nos, 10, 20, 30]

newNos
(8) [3, 1, 4, 2, 5, 10, 20, 30]


//Object Destructuring

var emp = { id : 100, name : 'Magesh', salary : 10000 }

var { id, salary } = emp

id
100
salary
10000
var product = { pid : 'P101', name : 'Pen', cost : 10, category : 'stationary' }

var { pid : v1, category : v2 } = product

v1
"P101"
v2
"stationary"
//Rest Operator (Objects)

var product = { pid : 'P101', name : 'Pen', cost : 10, category : 'stationary' }

var { pid : v1, category : v2, ...z } = product

z
{name: "Pen", cost: 10}
//Spread Operator (objects)

var newProduct = { ...product, discount : 10 }

newProduct
{pid: "P101", name: "Pen", cost: 10, category: "stationary", discount: 10}
//default arguments

function add(x = 10,y = 20){
    return x + y;
}

add()
30
add(100)
120
add(undefined, 200)
210
add(100,200)
300
//arrow functions

/*
//function statement
function add(x,y){
    return x + y;
}

//function expression
var add = function(x,y){
    return x + y;
}

var add = (x,y) => {
    return x + y;
}
*/
var add = (x,y) => x + y;




typeof add
"function"
add(100,200)
300
//template strings

var s1 = `
    Sum of ${v1} and ${v2} 
    is ${v1 + v2}
`

s1
"
    Sum of P101 and stationary 
    is P101stationary
"
//class

class Employee{
    id = 0;
    name = '';
    salary = 0;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    display(){
        console.log(`id=${this.id}, name=${this.name} and salary=${this.salary}`);
    }
    
}

var emp = new Employee(100, 'Magesh', 10000)

emp
Employee {id: 100, name: "Magesh", salary: 10000}
emp.display()
VM4223:13 id=100, name=Magesh and salary=10000

//class Inheritance

class FullTimeEmployee extends Employee{
    benefits = '';
    constructor(id, name, salary, benefits){
        super(id, name, salary);
        this.benefits = benefits;
    }
}

var fte = new FullTimeEmployee(200, 'Suresh', 20000, 'Good food!')

fte
FullTimeEmployee {id: 200, name: "Suresh", salary: 20000, benefits: "Good food!"}
fte.display()
VM4223:13 id=200, name=Suresh and salary=20000

//For more : http://es6-features.org

