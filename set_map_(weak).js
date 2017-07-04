'use strict'

let user = {
    name: 'Max'
}

let map = new Map();

map.set(user,5)

var user2={};
Object.assign(user2,user)
map.get(user2);// undefined