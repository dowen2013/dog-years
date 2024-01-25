// Declare a variable of myAge to equal my age in years
var myAge = 48;
var name = 'Darren';

// Declare a variable called earlyYears and set to the number 2. Not a constant as this
// variable will change.
var earlyYears = 2;

earlyYears *= 10.5;

// Take current value of myAge - 2 and assign it to the new laterYears variable.
var laterYears = myAge - 2;

// Use multiplication assigned, multiplying the laterYears variable by 4 to calculate the dog age.
laterYears *= 4;

// Declare a new variable adding together earlyYears and laterYears.
var myAgeInDogYears = earlyYears + laterYears;

console.log(`My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
