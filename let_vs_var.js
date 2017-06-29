'use strict'


var armyVar = [];

for (var i = 1; i < 11; i++) {
    armyVar.push(() => {
        console.log(i);
    })
}

for (var j = 0; j < armyVar.length; j++) {
    armyVar[j]();
}

//*************/

var armyLet = [];

for (let i = 1; i < 11; i++) {
    armyLet.push(() => {
        console.log(i);
    })
}

for (let j = 0; j < armyLet.length; j++) {
    armyLet[j]();
}