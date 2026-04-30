export function exe2Array(): void {
    const notas: number[] = [];
    while (true) {
        const n = Number(prompt("Digite uma nota (-1 para encerrar):"));
        if (n === -1) break;
        notas.push(n);
    }

    const qtd = notas.length;
    if (qtd === 0) {
        console.log("Nenhuma nota informada.");
        return;
    }

    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    const media = soma / qtd;
    const acimaMedia = notas.filter(n => n > media).length;

    console.log(`Quantidade de notas: ${qtd}`);
    console.log(`Notas na ordem: ${notas.join(", ")}`);
    console.log(`Notas na ordem inversa: ${[...notas].reverse().join(", ")}`);
    console.log(`Soma das notas: ${soma.toFixed(2)}`);
    console.log(`Média das notas: ${media.toFixed(2)}`);
    console.log(`Notas acima da média: ${acimaMedia}`);
}
