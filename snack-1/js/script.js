//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e peso. 
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
//Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6. (edited)


var bike = [

    {
        names : 'rossa',
        weight : 20
    },
    {
        names : 'bianchina',
        weight : 15
    },
    {
        names : 'silver',
        weight : 25
    },

]

var lastLightBike;
var lastLightOldBike = 25;


for( var x = 0; x < bike.length; x++){

    var thisWeight =bike[x].weight;

    if(thisWeight < lastLightOldBike){
        
        lastLightBike = bike[x];
        lastLightOldBike = thisWeight;

    }
}

console.log(lastLightBike);


// versione ij6;

let lastLightBike;
let lastLightOldBike = 25;


for( let x = 0; x < bike.length; x++){

    const {weight} =bike[x];

    if(weight < lastLightOldBike){
        
        lastLightBike = bike[x];
        lastLightOldBike = weight;

    }
}

const {names} = lastLightBike;

console.log(`La bici piu leggera é : ${names}`);









//fine ij6;
