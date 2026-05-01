function processarItem(preco, qtd) {
    let total = preco * qtd;
    if (qtd > 10) {
        total *= 0.95;
        console.log(`Desconto de 5% aplicado para ${qtd} unidades.`);
    }
    return total;
}
export function exe8Func() {
    let totalGeral = 0;
    let somaPrecos = 0;
    let contador = 0;
    while (true) {
        const preco = Number(prompt("Preço unitário do produto (0 para sair):"));
        if (preco === 0)
            break;
        const qtd = Number(prompt("Quantidade comprada:"));
        const valorFinal = processarItem(preco, qtd);
        totalGeral += valorFinal;
        somaPrecos += preco;
        contador++;
        console.log(`Valor do item: R$ ${valorFinal.toFixed(2)}`);
    }
    if (contador > 0) {
        console.log(`Total geral investido: R$ ${totalGeral.toFixed(2)}`);
        console.log(`Média de preço dos produtos: R$ ${(somaPrecos / contador).toFixed(2)}`);
    }
    else {
        console.log("Nenhum produto cadastrado.");
    }
}
