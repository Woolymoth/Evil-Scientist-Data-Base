type Scientist = {
    name: string, 
    age: number, 
    numberOfHenchmen: number, 
    description: string};

let evilScientist: { name: string, age: number, numberOfHenchmen: number, description: string} [] =[
    {name: "Josef Mengele",
    age: 45,
    numberOfHenchmen: 54,
    description: "Sick motherfucker."},

    {name: "Alfred Nobel",
    age: 51,
    numberOfHenchmen: 13,
    description: "Dynamite stick go boom!"},

    {name: "Shir Ishi",
    age: 67,
    numberOfHenchmen: 123,
    description: "Thaw them bodyparts."},
];

function newScientist(name: string, age: number, numberOfHenchmen: number, description: string):Scientist{
    const anotherScientist: Scientist =    
    {name: "Shir Ishi",
    age: 67,
    numberOfHenchmen: 123,
    description: "Thaw them bodyparts."}
    return anotherScientist;
};

function getScientistName(){
    let inputA: string = document.getElementById('nameFeild').value;
    alert(inputA)
    return inputA;
};

function getScientistAge(){
    let inputB: number = document.getElementById('ageFeild').value;
    alert(inputB);
    return inputB;
};
function getScientistNOH(){
    let inputC: number = document.getElementById('NOHFeild').value;
    alert(inputC);
    return inputC;
};
function getScientistDesc(){
    let inputD: string = document.getElementById('descriptionFeild').value;
    alert(inputD);
    return inputD;
};

// Eventlyssnare till formuläret.
const buttonElement = document.getElementById('applyButton');
buttonElement.addEventListener("click", getScientistName,);
buttonElement.addEventListener("click", getScientistAge,);
buttonElement.addEventListener("click", getScientistNOH,);
buttonElement.addEventListener("click", getScientistDesc);




