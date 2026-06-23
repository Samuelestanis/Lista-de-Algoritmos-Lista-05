let inicio=Number(prompt(`Digite o inicio do intervalo :`));
let final=Number(prompt(`Digite o final do intervalo :`));
let soma=0

for(let i=inicio;i<=final;i++){
 if(i%3===0 || i%5===0){
     soma+=i
 }
}
console.log(`A soma dos números mútiplos de 3 e 5 que estão entre os números ${inicio} e ${final} é igual a ${soma}`)