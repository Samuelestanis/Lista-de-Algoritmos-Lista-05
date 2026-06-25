let vet=[];

for(let i=0;i<=7;i++){
    vet[i]=Number(prompt(`Digite o código para a posição ${i+1} :`));
}
alert (vet);

let codigo = Number(prompt("Qual código você deseja remover do sistema: "));
let encontrado=false;

for(let i=0;i<=7;i++){
    if(codigo===vet[i]){
    vet[i] = 0;
    encontrado=true;
    console.log(`Código removido com sucesso. Novo sistema: ${vet}`);
 }
}
if(encontrado === false){
    console.log("O produto não existe.");
}
