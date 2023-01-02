// Looping Over Arrays

const animals = ['tigers','lions','bears'];

//Common template
for(let i=0;i<animals.length;i++){
    console.log(animals[i]);
}


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