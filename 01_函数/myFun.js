"use strict";
//函数定义
function f1() {
    return 'f1';
}
let f2 = function () {
    console.log('f2');
};
//参数类型
function f3(name, age) {
    console.log(`My name is ${name}, and my age is ${age}`);
}
// f3('LittleControl', 19)
//可选参数
function f4(name, age, gender) {
    console.log(`Name: ${name}, Age: ${age}, IsBoy: ${gender}`);
}
// f4('Control', 19, true)
// f4('Control', 19)
//剩余参数
function f5(name, name2, ...names) {
    let res = name + name2;
    for (const iname of names) {
        res += iname;
    }
    console.log(res);
}
f5('Little', 'Control');
f5('Little', 'Control', 'iLittle', 'iControl');
function f6(arg) {
    if (typeof arg === 'string') {
        return `My name is ${arg}`;
    }
    else if (typeof arg === 'number') {
        return `My age is ${arg}`;
    }
    else {
        return `Nothing can be founded`;
    }
}
console.log(f6('Control'));
console.log(f6(15));
