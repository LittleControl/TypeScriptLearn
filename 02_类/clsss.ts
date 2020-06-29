class Person {
    //默认为public 
    //protected 和 private 可选 
    protected name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getName() {
        console.log(this.name)
    }
    private getAge() {
        console.log(this.age)
    }
}

let p1 = new Person('p1', 23)
// console.log(p1)
// p1.getName()

class Man extends Person {

    protected _site: string

    constructor(name: string, age: number, site: string) {
        super(name, age)
        this._site = site
    }

    get site() {
        return this._site
    }

    set site(site: string) {
        this._site = site
    }
}

let m1 = new Man('m1', 22, 'nothing')
console.log(m1.site)
m1.site = 'iyuxuan'
console.log(m1.site)
m1.getName()
