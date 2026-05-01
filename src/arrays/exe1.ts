export function exe1Array() {
    console.log("--- Exercício 1: Derivadas de [0...15] ---");
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const pares = numeros.filter(n => n % 2 === 0);
    const impares = numeros.filter(n => n % 2 !== 0);
    const multiplos = numeros.filter(n => n % 2 === 0 || n % 3 === 0 || n % 4 === 0);
    const reverso = [...numeros].reverse();

    console.log("Pares:", pares);
    console.log("Ímpares:", impares);
    console.log("Múltiplos de 2, 3 e 4:", multiplos);
    console.log("Lista Reversa:", reverso);
    alert("Resultados impressos no console (F12)!");
}
