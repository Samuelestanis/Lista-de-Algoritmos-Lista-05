let valor=Number(prompt(`Digite o valor do produto`));
let percent=Number(prompt(`Digite a porcentagem de lucro`));

let valortotal=valor * (percent/100);
let valortotal1=valortotal+valor;


alert(`O valor total é ${valortotal1}`);
alert(`O valor da porcentagem é ${percent}%`);