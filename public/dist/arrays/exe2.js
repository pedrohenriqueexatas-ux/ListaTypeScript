export function exe2Array() {
    console.log("--- Exercício 2: Sistema de Notas (Até -1) ---");
    let notas = [];
    let nota;
    while (true) {
        let input = prompt("Digite uma nota (ou -1 para encerrar):");
        if (input === null || input === "-1")
            break;
        nota = parseFloat(input);
        if (!isNaN(nota)) {
            notas.push(nota);
        }
    }
    if (notas.length === 0) {
        alert("Nenhuma nota informada.");
        return;
    }
    const soma = notas.reduce((acc, n) => acc + n, 0);
    const media = soma / notas.length;
    const acimaMedia = notas.filter(n => n > media).length;
    console.log("Quantidade de notas:", notas.length);
    console.log("Notas na ordem informada:", notas);
    console.log("Notas na ordem inversa:", [...notas].reverse());
    console.log("Soma das notas:", soma);
    console.log("Média das notas:", media.toFixed(2));
    console.log("Notas acima da média:", acimaMedia);
    alert("Estatísticas impressas no console (F12)!");
}
