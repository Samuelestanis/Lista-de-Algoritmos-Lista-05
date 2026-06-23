let base=Number(prompt(`Digite o valor da base :`));
let expoente=Number(prompt(`Digite o valor do expoente :`));
let resultado = 1 

for(let i=1;i<=expoente;i++){

  resultado*=base
}
console.log(`${base} elevado a ${expoente} é igual à ${resultado}`)