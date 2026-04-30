function somarAte(n: number): number {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

export function exe1Func(): void {
    const num = Number(prompt("Digite um número inteiro positivo:"));
    if (num > 0) {
        const resultado = somarAte(num);
        console.log(`A soma de 1 até ${num} é ${resultado}`);
    } else {
        console.warn("Por favor, digite um número positivo.");
    }
}
