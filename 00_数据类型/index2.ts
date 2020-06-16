let v1: undefined = undefined
console.log(v1)
let v2: null = null
console.log(v2)
let v3: undefined | null | number
console.log(v3)
v3 = null
console.log(v3)
v3 = 3
console.log(v3)

let box1: any = document.querySelector('#box1')
box1.style.color = 'red'

function test(): void {
    console.log('void...')
}
test()

let v4: never
v4 = (() => { throw new Error('never') })()
