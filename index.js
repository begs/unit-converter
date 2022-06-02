let inputNumber = document.getElementById("input-el");

let lengthElement = document.getElementById("length-el");
let volumeElement = document.getElementById("volume-el");
let massElement = document.getElementById("mass-el");

inputNumber.innerText = 500;

function lengthConversion()
{
    let input = inputNumber.innerText;
    
    let outputFeet = (input * 3.28084).toFixed(3);
    let outputMeters = (input * 0.3048).toFixed(3);

    lengthElement.innerText = input + " meters = " + outputFeet + " feet | " + input + " feet = " + outputMeters + " meters"  
}

function volumeConversion()
{
    let input = inputNumber.innerText;
    
    let outputLiters = (input * 4.54609).toFixed(3);
    let outputGallons = (input * 0.2199692).toFixed(3);
    
    volumeElement.innerText = input + " gallons = " + outputLiters + " liters | " + input + " liters = " + outputGallons + " gallons"
}

function massConversion()
{
    let input = inputNumber.innerText;
    
    let outputKilograms = (input * 0.45359237).toFixed(3);
    let outputPounds = (input * 2.20462262185).toFixed(3);
    
    massElement.innerText = input + " pounds = " + outputKilograms + " kilograms | " + input + " kilograms = " + outputPounds + " pounds" 
}

lengthConversion();
volumeConversion();
massConversion();

//todo, fix button. onclick kall alle funksjonane for å refreshe verdier?
//eller sjekk om det er mulig å få koden til å refreshe med en gang?

// Requirements:
// Save number to variable in code
// When app loads, do calculations and display the results
// Round numbers to 3 decimal places
// Stretch goal: add input for the user to change the number and automatically recalculate values when it changes