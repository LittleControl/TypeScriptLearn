//函数定义

function f1(): string {
    return 'f1'
}

let f2 = function (): void {
    console.log('f2')
}

//参数类型

function f3(name: string, age: number): void {
    console.log(`My name is ${name}, and my age is ${age}`)
}
// f3('LittleControl', 19)

//可选参数

function f4(name: string, age: number, gender?: boolean): void {
    console.log(`Name: ${name}, Age: ${age}, IsBoy: ${gender}`)
}
// f4('Control', 19, true)
// f4('Control', 19)

//剩余参数

function f5(name: string, name2: string, ...names: string[]): void {
    let res = name + name2
    for (const iname of names) {
        res += iname
    }
    console.log(res)
}
f5('Little', 'Control')
f5('Little', 'Control', 'iLittle', 'iControl')

//函数重载

function f6(name: string): string
function f6(age: number): string
function f6(arg: any): string {
    if (typeof arg === 'string') {
        return `My name is ${arg}`
    }
    else if (typeof arg === 'number') {
        return `My age is ${arg}`
    }
    else {
        return `Nothing can be founded`
    }
}

console.log(f6('Control'))
console.log(f6(15))
