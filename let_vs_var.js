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

//Closure
var armyVar2 = [];

for (var i = 1; i < 11; i++) {
    var func = (arg) => {
        return () => {
            console.log(arg);
        }
    };
    armyVar2.push(func(i));
}
console.log('Closure')

for (var j2 = 0; j2 < armyVar2.length; j2++) {
    armyVar2[j2]();
}

//*************/