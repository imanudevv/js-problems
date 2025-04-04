const person = {
    fullName: function() {
        return this.firstName + "" + this.lastName; 
    }
};

const member = {
    firstName: "anu",
    lastName: "dev",
};

let result = person.fullName.bind(member);
console.log(result()); 
