function calcularMediaPonderada(n1, n2, p1, p2){
    
return (n1*p1+n2*p2)/(p1+p2);
}
let nota1=Number(prompt(`Digite a nota 1 :`));
let nota2=Number(prompt(`Digite a nota 2 :`));
let peso1=Number(prompt(`Digite o peso 1 :`));
let peso2=Number(prompt(`Digite o peso 2 :`));

let resultado=calcularMediaPonderada(nota1,nota2,peso1,peso2)

console.log(`A média é ${resultado}`)