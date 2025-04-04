const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName; 
    }
}
const person1 = {
    firstName: "John",
    lastName: "doe"
}

console.log(person.fullName.apply(person1))
