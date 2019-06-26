var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello " + person.firstName + ' ' + person.lastName;
}
var user = new User('yyccQQu', 'xudabc');
console.log(greeter(user));
