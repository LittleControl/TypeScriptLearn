"use strict";
let v1 = undefined;
console.log(v1);
let v2 = null;
console.log(v2);
let v3;
console.log(v3);
v3 = null;
console.log(v3);
v3 = 3;
console.log(v3);
let box1 = document.querySelector('#box1');
box1.style.color = 'red';
function test() {
    console.log('void...');
}
test();
let v4;
v4 = (() => { throw new Error('never'); })();
