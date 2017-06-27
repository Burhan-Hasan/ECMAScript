'use strict'

var promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Hii");
    }, 1000);
});

promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
});