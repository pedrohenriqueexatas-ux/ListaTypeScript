export function exe1Array() {
    const original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const pares = original.filter(n => n % 2 === 0);
    const impares = original.filter(n => n % 2 !== 0);
    const mult2 = original.filter(n => n > 0 && n % 2 === 0);
    const mult3 = original.filter(n => n > 0 && n % 3 === 0);
    const mult4 = original.filter(n => n > 0 && n % 4 === 0);
    const reversa = [...original].reverse();
    console.log("Original:", original);
    console.log("Pares:", pares);
    console.log("Ímpares:", impares);
    console.log("Múltiplos de 2:", mult2);
    console.log("Múltiplos de 3:", mult3);
    console.log("Múltiplos de 4:", mult4);
    console.log("Reversa:", reversa);
}
