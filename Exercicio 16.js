let vet=[];
let v2=[];
let v1=[];

for(let i=0;i<=9;i++){
    vet[i]=Number(prompt(`Digite um valor para a posição ${i+1} :`));
}
for(let i=0;i<=9;i++){
if(vet[i]%2===0){
    
    v1[i]=vet[i];
 }
 else{
   
    v2[i]=vet[i];
    }
}
console.log(`Vetor Ímpar ${v2}`)
console.log(`Vetor par ${v1}`)
