export function exe9Array() {
    console.log("--- Exercício 9: Gerar Intervalo Filtrado ---");
    function gerarIntervaloFiltrado(inicio, fim) {
        if (inicio > fim) {
            console.log("Invertendo valores para garantir intervalo válido...");
            [inicio, fim] = [fim, inicio];
        }
        let intervalo = [];
        for (let i = inicio; i <= fim; i++) {
            intervalo.push(i);
        }
        let idadeInput = prompt("Digite sua idade para filtrar os múltiplos e divisores:");
        let idade = parseInt(idadeInput || "0");
        let contador = 0;
        console.log(`Números que são múltiplos e divisores de ${idade}:`);
        for (let num of intervalo) {
            if (num > 0 && (num % idade === 0 || idade % num === 0)) {
                console.log(num);
                contador++;
            }
        }
        console.log(`Total de números impressos: ${contador}`);
        alert(`Filtro concluído! ${contador} números encontrados. Veja o console (F12).`);
    }
    let start = parseInt(prompt("Digite o início do intervalo:") || "0");
    let end = parseInt(prompt("Digite o fim do intervalo:") || "0");
    gerarIntervaloFiltrado(start, end);
}
