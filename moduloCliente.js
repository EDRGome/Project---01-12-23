//Usando o Sistema de Módulos do Node o COMMON.JS

const moduloA = require("./moduloA")
const moduloB = require("./moduloB")
const codeJS01 = require("./node/codeJS01")

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

console.log(codeJS01.Pessoa())