/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 19;
if (votingAge > 18){
    console.log(true);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let myName = "kalvin";
const yourName = "you";

if (myName == "kalvin") {
    myName = yourName;
}
console.log(myName);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var date = Number("1999");
console.log(date);




//Task d: Write a function to multiply a*b 
function multiply(a, b){
    return a * b;
}
console.log(multiply(4, 6));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(year){
    return 7 * year;
}
console.log(dogYears(22));




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(weight, age){
    let food = 0;
    if (age >= 1){
        if (weight < 6){
            food = .05 * weight;
        } else if (weight <11){
            food = .04 * weight;
        } else if (weight <= 15){
            food = .03 * weight;
        } else {
            food = .02 * weight;
        }
    } else {
        if (age >=2/12 && age <= 5/12){
            food = .1 * weight;
        } else if (age <= 7/12){
            food = .05 * weight;
        } else if (age <1){
            food = .04 * weight;
        }
    }
    return food;
}
console.log(dogFeeder(15,1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rps(hand){
    let ai;
    let value = Math.random();
    hand = hand.toLowerCase();
    if (value <= .3333){
        ai = "rock";
    } else if (value <= .6666){
        ai = "paper";
    } else {
        ai = "sissors";
    }
    switch (hand){
        case ("rock"):
            if (ai == "rock"){
                return "draw";
            } else if (ai == "paper"){
                return "You lose!";
            } else {
                return "You win!";
            }
        case ("paper"):
            if (ai == "paper"){
                return "draw";
            } else if (ai == "sissors"){
                return "You lose!";
            } else {
                return "You win!";
            }
        case ("sissors"):
            if (ai == "sissors"){
                return "draw";
            } else if (ai == "Rock"){
                return "You lose!";
            } else {
                return "You win!";
            }
        default:
            return "Not a valide move";
    }
}
console.log(rps("Paper"));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
kmToMiles = (km) => String(km * 0.621371) + " miles";
console.log(kmToMiles(12));




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
feetToCm = (feet) => String(feet * 30.48) + " CM";
console.log(feetToCm(4));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
annoyingSong = (startingNumber) => {
    while (startingNumber > 0){
        console.log(startingNumber + " bottles of soda on the wall, " + startingNumber + " bottles of soda");
        startingNumber--;
        console.log("take one down pass it around " + startingNumber + " bottles of soda on the wall");
    }
}
annoyingSong(5)



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
grade = (enterGrade) => {
    if (enterGrade >= 90) {
        return "A";
    } else if (enterGrade >= 80) {
        return "B";
    } else if (enterGrade >= 70) {
        return "C";
    } else if (enterGrade >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(grade(70));

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
vowels = (word) => {
    let count = 0;
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        check = word.charAt(i)
        if (check == "a" || check == "e" || check == "i" || check == "o" || check == "u") {
            count ++;
        }
    }
    return count;
}
console.log(vowels("kalvin"));




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
play = prompt("Enter Rock, Paper, or Sissors");
console.log(rps(play));


