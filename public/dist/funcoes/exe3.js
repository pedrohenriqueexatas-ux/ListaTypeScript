function desenharTriangulo(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let linha = "";
        for (let j = 1; j <= i; j++) {
            linha += "*";
        }
        console.log(linha);
    }
}
export function exe3Func() {
    const n = Number(prompt("Digite o tamanho do triângulo:"));
    desenharTriangulo(n);
}
