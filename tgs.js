//soal1
let studentsScore = [ 
    {
        name  : 'Andi',
        score : 90
    },
    {
        name  : 'Rudi',
        score : 80
    },
    {
        name  : 'Dira',
        score : 100
    },
];

let topStudent = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > topStudent.score) {
        topStudent = studentsScore[i];
    }
}

console.log(`Nama: ${topStudent.name}, Nilai: ${topStudent.score}`);

// Soal 2

var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

var result = {};

for (var i = 0; i < motoGP.length; i++) {
    var event = motoGP[i];
    var country = event.winner.country;
    var name = event.winner.firstName + ' ' + event.winner.lastName;
    var winLocation = event.circuit + ', ' + event.location;

    if (!result[country]) {
        result[country] = {
        winningCircuits: [],
        totalWin: 0
        };
    }

    result[country].winningCircuits.push({
        name: name,
        winLocation: winLocation
    });
    result[country].totalWin++;
}

console.log(result);
