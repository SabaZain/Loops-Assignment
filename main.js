// Loops Assignments
// Assignment 1. Creating a Lesson Plan(Using for loop)
// Step 1. Creating a blank array named myWork that will hold objects.
const myWork = [];
// Step 2. Writing a for loop that runs from 1 to 10. In each iteration:
// Create an object representing a lesson.
// Each lesson should have a name property, which is a string like "Lesson 1", "Lesson 2", etc.
// Each lesson should also have a status property, which alternates between trueand false. 
for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `lesson : ${i}`,
        status: i % 2 === 1 ? true : false
    };
    // Step 3. Adding the lesson to the myWork array.
    myWork.push(lesson);
}
// Step 4. Printing the result
console.log(myWork);
// Assignment 2. Guessing Game (Using while loop)
// Step 1. Creating a variable to store the maximum value for the number 
let maxValue = 50;
// Step 2. Generating a random number: Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. 
// Log this value to the console for development purposes
let randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number: ${randomNumber}`);
// Step 3. Creating a variable to track whether the user's guess is correct. Set it to false initially.
let isUserGuessCorrect = false;
// Step 4. Simulate user guesses: Use an array to store a series of predefined guesses.
let userGuesses = [1, 2, 5, 8, 10, 12, 13, 15, 18, 20, 21, 22, 23, 29, 31, 34, 38, 40, 41, 44, 46, 47, 48, 49, 50];
// Step 5. Using a while loop to iterate over the predefined guesses until the correct guess is made.
let index = 0;
while (!isUserGuessCorrect && index < userGuesses.length) {
    let userGuessedNumber = userGuesses[index];
    console.log(`User Guessed Number: ${userGuessedNumber}`);
    // Step 6. Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low.
    if (userGuessedNumber === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        isUserGuessCorrect = true;
    }
    else if (userGuessedNumber < randomNumber) {
        console.log("You guessed a low number. Please try again");
    }
    else {
        console.log("You guessed a high number. Please try again");
    }
    index++;
}
if (!isUserGuessCorrect) {
    console.log("Sorry! You used all your guesses. Try your luck next time");
}
// Assignment 3 -  Counter Incrementer (Using do while loop )
// Step 1. Creating a variable counter and initialize it to 0.
let initialCounter = 0;
// Step 2. Creating a variable step to hold the value by which the counter will be incremented
let step = 5;
// Step 3. Adding a do while loop & printing the counter to the console and increment it by the step amount each iteration
do {
    console.log(initialCounter);
    initialCounter += step;
} // Step 4. Continue to loop until the counter is equal to or more than 100: The loop run as long as the counter is less than 100.
 while (initialCounter < 100);
console.log(initialCounter);
// Assignment 4 - Exploring Objects with for...in Loop
// Step 1. Defining an object called myObject with three properties: item1, item2, and item3, each with corresponding string values
let myObject = {
    item1: "2000",
    item2: "2500",
    item3: "3000"
};
// Step 2. Using a for in loop to get properties' names and values from the object:
// Inside the loop, printing each property's name and its corresponding value to the console.
for (let items in myObject) {
    console.log(`Object:${items}-${myObject[items]}`);
}
// Assignment 5 - Exploring Arrays with Loops(Using loop)
// 1. Creating an empty array called myArray
const myArray = [];
// 2. Run a for loop 10 times, adding a new incrementing value to the array
// In each iteration, add a new incrementing value (starting from 1) to the myArray
for (let j = 1; j <= 10; j++) {
    myArray.push(j);
}
// 3. Log the array into the console
console.log("Numbers Array:", myArray);
// 4. Use the for loop to iterate through the array elements.Adjust the number of iterations based on the number of values in the array.
// Output each array element along with its index into the console.
for (let n = 0; n < myArray.length; n++) {
    console.log(`Index ${n}: ${myArray[n]} `);
}
// 5. Use the for of loop to output the value into the console from the array:
// Output each array element directly into the console
for (let result of myArray) {
    console.log(result);
}
export {};
