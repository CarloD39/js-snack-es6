//Abbiamo sempre un array di squadre, con:
//nome
//punti fatti
//falli subiti
//Stampare in html in 'forma tabellare' i dati relativi alle squadre,
// evidenziando in giallo la riga corrispondente alla squadra con più falli subiti.


var club = [

    {
        names : 'Italia',
        points: 6,
        scoredGoal: 6,
        fouls: 20

    },
    {
        names : 'Svizzera',
        points: 1,
        scoredGoal: 1,
        fouls: 10
    },
    {
        names : 'Turchia',
        points: 0,
        scoredGoal: 0,
        fouls: 5
    },

    {
        names : 'Galles',
        points: 4,
        scoredGoal: 3,
        fouls: 15
    }

]

console.log(club);


var tableHTML = document.querySelector('.ranking-table');


for (var x = 0; x < club.length; x++) {


const {names, points, scoredGoal, fouls} = club[x];

    tableHTML.innerHTML += `
    <ul>
        <li>${names}</li>
        <li>${points}</li>
        <li>${scoredGoal}</li>
        <li>${fouls}</li>
    </ul>
    `

}