let opcao;

do{
    opcao = Number(prompt("1 - Converter Dólar \n" + "2 - Converter Euro \n" + "3 - Sair"));
    
    if (opcao === 1) {
        let reais = Number(prompt("Digite o valor em Reais:"));
        let dolares = reais / 5.50;
        console.log(`R$ ${reais} = US$ ${dolares.toFixed(2)}`);
    }
    else if (opcao === 2) {
        let reais = Number(prompt("Digite o valor em Reais:"));
        let euros = reais / 6.20;
        console.log(`R$ ${reais} = € ${euros.toFixed(2)}`);
    }
    else if (opcao !== 3) {
        console.log("Opção inválida!");
    }
}while(opcao!==3);