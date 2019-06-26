class User {
    fullName: string
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = this.firstName + ' ' + this.lastName
    }
}

interface Person {
    firstName: string
    lastName: string
}



function greeter(person: Person) {
  return "Hello " + person.firstName + ' ' + person.lastName;
}

let user = new User('yyccQQu', 'xudabc')


console.log(greeter(user));

