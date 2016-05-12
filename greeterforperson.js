function greeter(person) {
    return "Hello, " + person.firstName + "" + person.lastName;
}
var user = { firstName: "Jane ", lastName: "User" };
//var user = [1,2,3];
document.body.innerHTML = greeter(user);
