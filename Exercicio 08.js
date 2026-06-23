let num=Number(prompt(`Digite um número inteiro positivo :`));
let contador=0


 if (num === 0) {
        contador = 1;
} 
 else {
        
      while (num > 0) {
         num = Math.floor(num / 10); 
        contador++;                
    }
}


console.log(`O número possui ${contador} dígito(s).`);