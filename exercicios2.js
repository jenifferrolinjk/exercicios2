/*
1. Peça um número e diga se ele é positivo, negativo ou zero.
2. Peça a idade de uma pessoa e diga se ela é maior de idade ou não.
3. Peça duas notas e diga se o aluno foi aprovado (média ≥ 7).
4. Peça a senha e só mostre “Acesso permitido” se for igual a “1234”.
5. Peça um número e diga se ele é múltiplo de 5.
6. Peça um número e diga se ele é divisível por 2 **e** por 3.
7. Peça 3 números e mostre qual é o maior.
8. Peça a altura e diga se a pessoa pode entrar em um brinquedo (mínimo 1,40m).
9. Peça um número de 1 a 7 e mostre o dia da semana correspondente.
10. Peça uma letra e diga se é vogal ou consoante.

*/
 

//1. Peça um número e diga se ele é positivo, negativo ou zero.

let numero = 0
if(numero>0){
    console.log("positivo")
}
else if(numero<0){
    console.log("negativo")
}
else{
    console.log("zero")
}

//2. Peça a idade de uma pessoa e diga se ela é maior de idade ou não.

let idade= 18
if (idade >=18){
    console.log("maior de idade")
}
else{
 
    console.log("menor de idade")
}



//3. Peça duas notas e diga se o aluno foi aprovado (média ≥ 7).

let nota1,nota2,nota3=0
nota1=9
nota2=7
nota3=6
 
let media=(nota1+nota2+nota3)/3
if(media >=7){
    console.log("aprovado")
}
else{
    console.log("não aprovado")
}

//4. Peça a senha e só mostre “Acesso permitido” se for igual a “1234”.
 
var senha=8765
var senhaPermitida = 8765
if (senha== senhaPermitida){
    console.log("acesso permitido")

}else{
    console.log("acesso negado")
}

//5. Peça um número e diga se ele é múltiplo de 5.

let num1 = 5
let num2 = 5

let multiplicação = num1 * num2
console.log(multiplicação)

//6. Peça um número e diga se ele é divisível por 2 **e** por 3.


let num3 = 29
let num4= 2
let num5=3
if(num3 %2==0 && num3%3==0){
    console.log("numero divisivel por 2 e 3")
}
else{
    console.log("nao divisivel")
}
