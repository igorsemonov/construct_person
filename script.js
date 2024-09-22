
function ConstructPerson(
    age = prompt("Enter age"), 
    weight = prompt("Enter weight"), 
    height = prompt("Enter height"), 
    ethnicity = prompt("Enter ethnicity")
    ) {
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.ethnicity = ethnicity;
};

const person = new ConstructPerson;

console.log(person);

const personX = new ConstructPerson("infnite", "unknown");

console.log(personX);