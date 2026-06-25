function contarPositivosMaior50(vetor) {
    let contador = 0;

    for (let i = 0; i < 7; i++){
        if (vetor[i]>50){
            contador++;
    }
  }
   return contador;
}

let vet = [];

for (let i = 0; i < 7;i++){
    vet[i]=Number(prompt(`Digite o valor da posição ${i}:`));
}

let resultado = contarPositivosMaior50(vet);

console.log("Vetor:", vet);
console.log(`Quantidade de números positivos e maiores que 50: ${resultado}`);