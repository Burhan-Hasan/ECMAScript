'use strict'

var user = {
    name: 'Max',
    surname: 'Payne',
    age: 35
}

function showInfo({ name, surname: lastname, age }) {
    console.log(`User with name ${name} ${lastname} has ${age} age.`);
}
showInfo(user);


function getPointHome() {
    return 5;
}

function getPointAway() {
    return 18;
}

var obj = {
    home:4,// getPointHome(),
    away:6,// getPointAway(),
    total:(()=>{console.log(this.home+this.away)})()
}

console.log(obj);