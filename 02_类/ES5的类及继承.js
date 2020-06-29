//冒充对象实现继承
/* 
    - 无法继承父类的方法
*/
function Person(name, age) {
    this.name = name
    this.age = age
    this.gender = 'Male'
}

function Boy(name, age) {
    Person.call(this, name, age)
}

// var boy1 = new Boy('Control', 23)
// console.log(boy1.name)
// console.log(boy1.gender)

//原型链实现继承
/* 
    缺点:
        子类的构造函数还是父类的构造函数
*/

function People(name, age) {
    this.name = name
    this.age = age
}

People.prototype.getName = function () {
    console.log(this.name)
}

function Girl(name, age, site) {
    People.call(this, name, age)
    this.site = site
}
Girl.prototype = People.prototype
Girl.prototype.getSite = function () {
    console.log(this.site)
}

var g1 = new Girl('Lisa', 23, 'nothing')
console.log(Girl.prototype.constructor === People.prototype.constructor)

//改进方案
function Man(name, age) {
    this.name = name
    this.age = age
}

Man.prototype = Object.create(People.prototype)
Man.prototype.constructor = Man

var m1 = new Man('Cool', 23)
// console.log(m1.age)
// m1.getName()
console.log(Man.prototype.constructor)
console.log(People.prototype.constructor)
console.log(Man.prototype.constructor === People.prototype.constructor)
