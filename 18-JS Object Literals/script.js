// declaring first object literal

const person = {firstName:"Bhaskar", lastName:"Akhil"};
console.log(person);

//Accessing Object Elements

let buildingColor = {favNum:334343,isAttractive:true,colors:["red","yellow","blue"]};
console.log(buildingColor["favNum"]);//Need to mention key in double quotes. 
// Reason:- When we declare an object, every key in the object is converted into Strings except Symbols.

buildingColor = {true:"Something",null:"Someone"};
buildingColor[true];//gives Something
buildingColor["true"];//gives Something
//person[firstName];//gives error as firstName not defined.
person["firstName"];//gives 'Bhaskar'
buildingColor = {"class":'Something Wrong'};
console.log(buildingColor["class"]);

let name = "class";

console.log(buildingColor[name]);//gives Something Wrong as o/p

// ------------------------

// Modifying the Objects

const midTerms = {Akhil:75,Bhaskar:78};
midTerms.Bhaskar=79;//Modifies the value
midTerms["Akhil"] = 'A+'
midTerms.Naga = 'B+'
console.log(midTerms);//{Akhil: 'A+', Bhaskar: 79, Naga: 'B+'}
midTerms["Pavan"]= 'C++'
console.log(midTerms);//{Akhil: 'A+', Bhaskar: 79, Naga: 'B+', Pavan: 'C++'}