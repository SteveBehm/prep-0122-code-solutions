var person = {
  firstName: 'Steve',
  lastName: 'Behm',
  hobby: 'Surfing'
};
console.log(person);
const fullName = "The person's name is: " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);
person.job = 'funemployed';
console.log("The person's current job is: " + person.job + '.');
person.previousJob = 'Physical Therapist';
console.log("The person's previous job is: " + person.previousJob + '.');
console.log('The complete person object: ', person);
