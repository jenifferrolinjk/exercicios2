let nome = "jeniffer"

console.log(nome)

let idade = 16; 

console.log(idade)

/**
 * 2. Peça dois números e mostre a soma deles.
3. Peça dois números e mostre a subtração do primeiro pelo segundo.
4. Peça dois números e mostre a multiplicação.
5. Peça dois números e mostre a divisão.
6. Peça um número e mostre se ele é par ou ímpar (use `%`).
7. Calcule a média de 3 notas e mostre o resultado.
8. Peça um número e mostre o dobro dele.
9. Peça a idade de uma pessoa e mostre quantos anos ela terá daqui a 10 anos.
10. Converta uma temperatura de Celsius para Fahrenheit.
 */
//2. Peça dois números e mostre a soma deles.

let num1 = 8 
let num2 = 4

let soma = num1+num2 
console.log(soma)

//3.Peça dois números e mostre a subtração do primeiro pelo segundo.


let num3 = 8 
let num4 = 4

let subtracao = num1 - num2
console.log(subtracao) 

//4.Peça dois números e mostre a multiplicação.

let num5 = 3
let num6 = 4

let multiplicação = num5 * num6
console.log(multiplicação)

//5.Peça dois números e mostre a divisão

let num7 = 3
let num8 = 9

let divisão = num7 / num8
console.log(divisão)

//6.Peça um número e mostre se ele é par ou ímpar (use %)

if(num8% 2==0) { 
    console.log("par")
} else{
    console.log("impar")
}

//7.Calcule a média de 3 notas e mostre o resultado.

let nota1=45
let nota2=55
let nota3=70
let media=(nota1+nota2+nota3)/3
console.log(media)

//8.Peça um número e mostre o dobro dele.

let dobro = nota3*2
console.log(dobro)

//9. Peça a idade de uma pessoa e mostre quantos anos ela terá daqui a 10 anos.

let idadeFutura = idade+10
console.log(idadeFutura)

//10. Converta uma temperatura de Celsius para Fahrenheit.

let grau= 30
let Fahrenheit =(grau*9/5)+32
console.log(Fahrenheit)
