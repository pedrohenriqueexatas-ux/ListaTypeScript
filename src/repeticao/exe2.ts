export function exe2Rep(): void {
    const num: number = Number(prompt("Digite um número para ver a tabuada:"));
    
    console.log(`Tabuada do ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}