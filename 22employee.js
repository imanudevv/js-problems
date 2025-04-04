//using filter mthd
let employee=[
    ['1000','nikhil','developer'],
    ['1252','anil','tester'],
    ['1008','aju','support'],
    ['2000','karthika','developer'],
];

let filt=employee.filter(num=>num[2]=='developer')
console.log(filt)