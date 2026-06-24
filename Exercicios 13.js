let opcao = 0;
// Taxas de câmbio fixas de exemplo
const taxaDolar = 5.20;
const taxaEuro = 5.90;

while (opcao !== 3) {
    let menu = "Conversor de Moedas\n";
    menu += "1 - Converter Dólar\n";
    menu += "2 - Converter Euro\n";
    menu += "3 - Sair\n";
    menu += "Escolha uma opção:";

  
    opcao = Number(prompt(menu));

    if (opcao === 1) {
        let valorReais=Number(prompt("Digite o valor em Reais (R$):"));
        let resultado= valorReais /taxaDolar;
        console.log(`O valor em dolar é U$ ${resultado} dolares`)
    } else if (opcao === 2) {
        let valorReais =Number(prompt("Digite o valor em Reais (R$):")); 
        resultado=valorReais/taxaEuro
        let resultado = valorReais / taxaEuro;
        console.log(`O valor em Euro é € ${resultado} euros `)
        
    } else if (opcao === 3) {
        console.log("Encerrando o programa. Até logo!");
        
    } else {
       console.log("Opção inválida! Tente novamente.");
    }
}
