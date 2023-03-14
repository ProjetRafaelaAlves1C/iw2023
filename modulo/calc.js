const somaF = require('./soma')
const divF = require('./div')
const multF = require('./mult')
const subF = require('./sub')

console.log("A soma é: "+ somaF(3,5))
console.log("A subtração é: "+ subF(3,5))
console.log("A multiplicação é: "+ multF(3,5))
console.log("A divisão é: "+ divF(3,5))

//execução: node nomepasta.js