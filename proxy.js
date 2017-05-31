'use strict'

/*
Прокси (proxy) – особый объект, 
смысл которого – перехватывать обращения к другому объекту и, при необходимости, модифицировать их.
 */

var user = {
    name: 'Max'
};

var proxy = new Proxy(user, {
    get(target, prop) {
        console.log("Reading of propperty " + prop);
        return target[prop];
    },
    set(target, prop, value) {
        console.log("Setting data to propperty " + prop);
        target[prop] = value;
        return true;
    }
});

/*
Методы get/set позволяют реализовать доступ к произвольным свойствам, которых в объекте нет.
Например, в коде ниже словарь dictionary содержит различные фразы:
 */

let dictionary = {
    'Hello': 'Привет',
    'Bye': 'Пока'
}

console.log(dictionary['Hello']); // Привет

dictionary=new Proxy(dictionary,{
    get(target,phrase){
        return (!target[phrase] && !console.log(`No phrase: ${phrase}`) && "Not traslated") || target[phrase];
    }
})