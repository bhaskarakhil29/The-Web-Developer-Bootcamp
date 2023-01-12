/*
// Looping Over Arrays

const animals = ['tigers','lions','bears'];

//Common template
for(let i=0;i<animals.length;i++){
    console.log(animals[i]);
}
*/
/*
//Nested Loops

const seatingChart = [
    ['Akhil','Bhaskar','Rocky'],
    ['Vish','Narayan','Gurur','hruday'],
    ['suman','venky','uday']
]

for(let i=0;i<seatingChart.length;i++){
    for(let j=0;j<seatingChart[i].length;j++){
        console.log(`Seating Chart is ${seatingChart[i][j]}`);
    }
}

*/
/*
//While Loop
const SECRET = `GREAT`
let someString = prompt(`Guess the SECRET`)
while(someString != SECRET){
    someString = prompt(`Guess the SECRET`)
}
console.log(`You GUESSED IT!!!`);
*/
//Guessing GAME

let maximum = parseInt(prompt('Enter a number: '));

while(!maximum){
    maximum = parseInt(prompt('Enter a valid number: '));
}
const targetNum = Math.floor(Math.random()*maximum) + 1;
console.log(`Target Number is ${targetNum}`);

let guess = prompt("Enter your first guess!");
let attempts = 1;

while(parseInt(guess) !== targetNum){
    attempts++;
    if(guess === 'q'){
        break;
    }
    else if(parseInt(guess) > targetNum){
        guess = prompt("Too high! Enter a new guess");
    }else{
        guess = prompt("Too low! Enter a new guess");
    }
}
console.log(`You got it! It took you ${attempts} guesses`);
