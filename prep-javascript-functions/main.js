function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sumOfTwo = addTwoNumbers(2, 2);
console.log('add two numbers exercise: ', sumOfTwo);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hrsToMins = convertHoursToMinutes(2);
console.log('converting two hours to minutes: ', hrsToMins);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
var getGrtng = getGreeting('Tim');
console.log(getGrtng);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var multipliedBy5 = addAndMultiplyBy5(10, 5);
console.log('Add and multiply by 5 exercise: ', multipliedBy5);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var dividedBy5 = multiplyAndDivideBy5(35, 10);
console.log('Multiply and divide by 5 exercise: ', dividedBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractedNums = subtractTwoNumbers(22, 7);
console.log('Subtract two numbers exercise: ', subtractedNums);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var circumference = getCircleCircumference(5);
console.log('Get circle circumference from radius exercise: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('Get the full name exercise: ', fullName);

function cube(number) {
  return number ** 3;
}
var cubedNum = cube(5);
console.log('Cube a number exercise: ', cubedNum);
