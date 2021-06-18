//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà:
//nome,
//punti fatti,
//falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



var teams = [

    {
        names : 'Italia',
        points: 0,
        challenge: 0,
    },
    {
        names : 'Svizzera',
        points: 0,
        challenge: 0,
    },
    {
        names : 'Turchia',
        points: 0,
        challenge: 0,
    },

    {
        names : 'Galles',
        points: 0,
        challenge: 0
    }

]

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/*
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

for (let x = 0; x < teams.length; x++) {
    teams[x].points = randomNumber(0, 3);
    teams[x].challenge = randomNumber(0, 100);
}

console.log(teams)
