interface Person{
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return "Hello, " + person.firstName + "" + person.lastName;
}

var user = {firstName:"Jane ", lastName:"User" };
//var user = [1,2,3];
document.body.innerHTML = greeter(user);
