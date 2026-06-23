function pesomedio(p,al){
    let imc=p/(al*al)

if(imc<18.5){
 return 'Abaixo do peso' ;
}
else if(imc>18.5 && imc<24.9){
    return 'Peso normal';
 }
 else if(imc>25 && imc<29.9){
     return 'Sobrepeso';
 }
 else {
 return 'Obesidade';
 }
}
let peso=Number(prompt(`Digite seu peso em kg:`));
let altura=Number(prompt(`Digite sua altura em metros:`));

let resultado=pesomedio(peso,altura);

console.log(resultado);