let vet=[];

for(let i=0;i<=9;i++){
    vet[i]=Number(prompt(`Digite um valor para a posição ${i+1} :`));
}
console.log(vet);

let inicio = 0;
let fim = 9;

while (inicio < fim) {
    let aux;
    
    aux = vet[inicio];
    vet[inicio] = vet[fim];
    vet[fim] = aux;
    

    inicio++;
    fim--;
}
console.log("Vetor invertido:", vet);