'use strict'

var isAdmin = true;
var userName = 'Max';

function getProp() {
    return "country";
}

var user = {
    isAdmin,
    userName,
    [getProp()]: 'USA',

}

var appUser = {
    name: 'Max',
    surname: 'Payne',
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}

var userAdmin = {
    admin: true
}

Object.assign(appUser, userAdmin);
console.log(appUser);

