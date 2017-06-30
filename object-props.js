'use strict'

var isAdmin = true;
var userName = 'Max';

function getProp() {
    return "country";
}

var user = {
    isAdmin,
    userName,
    [getProp()]: 'USA'
}

console.log(user);