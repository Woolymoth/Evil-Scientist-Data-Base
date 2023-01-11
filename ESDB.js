
var evilScientist = [
    { name: "Josef Mengele",
        age: 45,
        numberOfHenchmen: 54,
        description: "Sick motherfucker." },
    { name: "Alfred Nobel",
        age: 51,
        numberOfHenchmen: 13,
        description: "Dynamite stick go boom!" },
    { name: "Shir Ishi",
        age: 67,
        numberOfHenchmen: 123,
        description: "Thaw them bodyparts." },
];
//Funktion som lägger till ny 
function newScientist(anotherScientist) {
    var anotherScientist = { name: inputA,
        age: inputB,
        numberOfHenchmen: InputC,
        description: inputD};
    return anotherScientist;
};




//Funktioner som tar emot input data från användare.

function getScientistName(){
    let inputA = document.getElementById('nameFeild').value;
    alert(inputA)
};

function getScientistAge(){
    let inputB = document.getElementById('ageFeild').value;
    alert(inputB)
};
function getScientistNOH(){
    let inputC = document.getElementById('NOHFeild').value;
    alert(inputC)
};
function getScientistDesc(){
    let inputD = document.getElementById('descriptionFeild').value;
    alert(inputD)
};

// Eventlyssnare till formuläret.
const buttonElement = document.getElementById('applyButton');
buttonElement.addEventListener("click", getScientistName,);
buttonElement.addEventListener("click", getScientistAge,);
buttonElement.addEventListener("click", getScientistNOH,);
buttonElement.addEventListener("click", getScientistDesc);




