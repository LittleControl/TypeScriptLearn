"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
}
let p1 = new Person('p1', 23);
// console.log(p1)
// p1.getName()
class Man extends Person {
    constructor(name, age, site) {
        super(name, age);
        this._site = site;
    }
    get site() {
        return this._site;
    }
    set site(site) {
        this._site = site;
    }
}
let m1 = new Man('m1', 22, 'nothing');
console.log(m1.site);
m1.site = 'iyuxuan';
console.log(m1.site);
m1.getName();
