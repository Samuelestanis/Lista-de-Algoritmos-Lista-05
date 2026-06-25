let vet=[];
let soma=0;
let media=0

for(let i=0;i<=7;i++){
    vet[i]=Number(prompt(`Digite a nota do aluno ${i+1}`));

soma+=vet[i];

}

media=soma/8;
console.log(`A média de nota da sala é ${media} `)

for(let i=0;i<=7;i++){
if(vet[i]<media){
    console.log(`Nota abaixo da média da turma ${vet[i]}`);
 }
}