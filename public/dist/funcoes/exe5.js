function listarMultiplos3(inicio, fim) {
    console.log(`Múltiplos de 3 entre ${inicio} e ${fim}:`);
    for (let i = inicio; i <= fim; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
export function exe5Func() {
    const start = Number(prompt("Digite o início do intervalo:"));
    const end = Number(prompt("Digite o fim do intervalo:"));
    listarMultiplos3(start, end);
}
