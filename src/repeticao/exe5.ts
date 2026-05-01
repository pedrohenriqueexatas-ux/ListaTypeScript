function classificarVenda(valor: number): string {
    if (valor < 1000) return "Bronze";
    if (valor <= 5000) return "Prata";
    return "Ouro";
}

export function exe5Rep(): void {
    let totalVendas: number = 0;
    let maiorVenda: number = -1;
    let qtdOuro: number = 0;

    for (let i = 1; i <= 5; i++) {
        const valor: number = Number(prompt(`Digite o valor da venda do vendedor ${i}:`));
        totalVendas += valor;

        if (valor > maiorVenda) maiorVenda = valor;

        const categoria = classificarVenda(valor);
        console.log(`Vendedor ${i}: R$ ${valor.toFixed(2)} (${categoria})`);

        if (categoria === "Ouro") qtdOuro++;
    }

    console.log(`Total de vendas da equipe: R$ ${totalVendas.toFixed(2)}`);
    console.log(`Maior venda individual: R$ ${maiorVenda.toFixed(2)}`);
    console.log(`Vendedores na categoria Ouro: ${qtdOuro}`);
}
