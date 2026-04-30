function solicitar_renda_mensal(): number {
    let renda: number;
    do {
        renda = Number(prompt("Digite sua renda mensal:"));
        if (renda <= 0) console.warn("Renda deve ser maior que zero!");
    } while (renda <= 0);
    return renda;
}

function analisar_credito(renda: number, parcela: number): boolean {
    const limiteParcela = renda * 0.30;
    let aprovado = parcela <= limiteParcela;
    
    if (aprovado && renda > 5000) {
        console.log("Parabéns! Você ganhou um bônus de R$ 500,00 no limite por ter renda superior a R$ 5000.");
    }
    
    return aprovado;
}

function exibir_status(resultado: boolean): void {
    if (resultado) {
        console.log("STATUS: Crédito Aprovado");
    } else {
        console.log("STATUS: Crédito Negado (Parcela excede 30% da renda)");
    }
}

export function exe9Func(): void {
    const renda = solicitar_renda_mensal();
    const valorParcela = Number(prompt("Qual o valor da parcela desejada?"));
    const resultado = analisar_credito(renda, valorParcela);
    exibir_status(resultado);
}
