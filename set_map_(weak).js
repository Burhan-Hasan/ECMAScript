'use strict'

let user = {
    name: 'Max'
}

let map = new Map();

map.set(user, 5)

var user2 = {};
Object.assign(user2, user)
map.get(user2);// undefined


var usersActivity = new WeakMap();

usersActivity.set(user, 50);

console.log(usersActivity.get(user));//50
user=null;
console.log(usersActivity.get(user));//undefined

