/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19;

if (votingAge > 18) {
    console.log('True');
} else {
    console.log('False');
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let hunger ='Really Hungry';
let favoriteFood = 'Pizza'
    if (hunger === 'Really Hungry') {
        favoriteFood = 'Entire Pie';
    } else if (hunger === 'Not That Hungry'){
        favoriteFood = 'Just a Slice';
    } else {
        favoriteFood = 'Not Hungry';
    }

console.log(favoriteFood);





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
 
var string = '1999';
console.log(parseInt(string));



//Task d: Write a function to multiply a*b 

const multiply = (a,b) => a*b;




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


let ageInDogYears = (age) => {
    age = age*7;
    console.log(age);
}

ageInDogYears(12.5);



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
  
let dogFeeder = (weight,age) => {
    let amount=1;
    if(age >= 1 && weight <= 5) {
        amount = weight*.05;
    } else if (age >= 1 && weight <= 10 && weight > 6) {
        amount = weight*.04;
    } else if (age >= 1 && weight <= 15 && weight > 10) {
        amount = weight*.03;
    } else if (age >= 1 && weight > 15){
        amount = weight*.02;
    }  else if (age < 1.0 && age >= .583) {
        amount = weight * .04;
    } else if (age < .583 && age >= .333){
        amount = weight * .05;
    } else if (age < .333 && age >= 1.67) {
        amount = weight * .10;
    } else {
        console.log('Go see your vet!');
    }
    return amount;
}

console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 



let rockPaperScissors = (string) => {
   
    const rock = 0;
    const paper = 1;
    const scissors = 2;
    let ruling = '';
    let compChoice = Math.round(Math.random()*2);
    if (string === 'rock' && compChoice=== paper){
        ruling = 'The Computer Rolled Paper! Computer Wins!';
    } else if (string ==='rock' && compChoice === scissors){
        ruling = 'The Computer Rolled Scissors! You win!';
    } else if (string === 'paper' && compChoice === scissors){
        ruling = 'The Computer Rolled Scissors! Computer Wins!';
    } else if(string === 'paper' && compChoice === rock) {
        ruling = 'The Computer Rolled Rock! You win!';
    } else if(string ==='scissors' && compChoice === rock){
        ruling = 'The Computer Rolled Rock! Computer Wins!';
    } else if(string ==='scissors' && compChoice === paper){
        ruling = 'The Computer Rolled Paper! You Win!';
    } else {
        ruling = 'No Winners! Please try again!';
    }
    return ruling;
    
}

console.log(rockPaperScissors('paper'));


// function rockPaperScissors(){
//     prompt('Please enter rock, paper, or scissors!');
//     string = prompt;
//         if(string != null){
//         document.getElementById('outcome').innerHTML =
//         'You chose' + string + ruling;
//     }
//     }

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kmConverter = (km) => {
    let miles = 0;
    miles = (km/1.60934);
    return miles;
}

console.log(kmConverter(10));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let ftConverter = (ft) => {
    let cm = 0;
    cm = (ft*30.48)
    return cm;
}

console.log(ftConverter(15));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
for (let i=99; i > -1; i--){
    // let leftover= (i -1);
    // console.log(`${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${leftover} bottles of soda on the wall`);
    console.log(i);
}
console.log(annoyingSong(10));


let annoyingSong = (number) => {

for (let i=number; i > 0; i--){
    number = i;
    let leftover= (i -1);
    console.log(`${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${leftover} bottles of soda on the wall`);
}
}

annoyingSong(50);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
const gradeCalc = (num) => {
    let grade = '';
    if (num >= 90 && num <= 100){
        grade = 'A';
    } else if (num >= 80 && num < 90){
        grade = 'B';
    } else if (num >= 70 && num < 80) {
        grade = 'C';
    } else if (num >= 60 && num < 70){
        grade = 'D';
    } else if (num < 60) {
        grade = 'F';
    } else {
        grade = 'Please see the professor';
    }
    return grade;
}
console.log(gradeCalc(100));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const vowelCount = (str) => {
    let count = 0;
    str = str.toUpperCase();
    let vowelArray = ['A', 'E', 'I', 'O', 'U'];

    for (let letter of str){
        if (vowelArray.includes(letter)) {
            count++;
        }
    }
        return count;
}

console.log(vowelCount('Hello, How are you TODAy?'))

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





