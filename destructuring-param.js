'use strict'

var user = {
    name: 'Max',
    surname: 'Payne',
    age: 35
}

function showInfo({name,surname:lastname,age})
{
    console.log(`User with name ${name} ${lastname} has ${age} age.`);
}
showInfo(user);