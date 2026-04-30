function calcular_media(notas: number[]): number {
    if (notas.length === 0) return 0;
    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    return Number((soma / notas.length).toFixed(2));
}

export function exe4Array(): void {
    const notasEnem: number[] = [];
    console.log("Calculadora de Média ENEM (Digite 5 notas)");
    
    for (let i = 1; i <= 5; i++) {
        const n = Number(prompt(`Nota da disciplina ${i}:`));
        notasEnem.push(n);
    }

    const mediaFinal = calcular_media(notasEnem);
    console.log(`Suas notas: ${notasEnem.join(", ")}`);
    console.log(`Sua média final arredondada é: ${mediaFinal}`);
}
