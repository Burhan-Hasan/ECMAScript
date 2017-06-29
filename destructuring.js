'use strict'

var [name, surname, ...otherDetails] = ["Max", "Payne", "Dedective", 35];
/*
console.log(`Name: ${name}`);
console.log(`Surname: ${surname}`);
console.log(`Details: ${otherDetails}`);
*/

var kendoGrid = {
    dataSource: [{ name: 'Max' }, { name: 'Alex' }],
    table: {}
}

function Foo() {
    let { dataSource } = kendoGrid;
    console.log(dataSource);
}

Foo();