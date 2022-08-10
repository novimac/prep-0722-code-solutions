var person = {
  firstName: 'Novi',
  lastName: 'Le',
  hobby: 'Traveling'
};

console.log('Person', person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Mom';
console.log("The person's current job is:", person.job);

person.previousJob = 'Recruiter';
console.log("The person's previous job was:", person.previousJob);

console.log('Person', person);
