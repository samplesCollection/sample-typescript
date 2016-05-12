class Student {
  fullname : string;

  constructor(public firstname, public middlename, public lastname){
    this.fullname = firstname +" "+ middlename +" "+ lastname;
  }

}

interface Person{
  firstname: string;
  lastname: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
