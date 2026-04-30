export function exe6Rep() {
    var n = Number(prompt("Quantos termos da sequência de Fibonacci deseja ver?"));
    var a = 0;
    var b = 1;
    var resultado = "";
    for (var i = 1; i <= n; i++) {
        resultado += a + (i === n ? "" : ", ");
        var proximo = a + b;
        a = b;
        b = proximo;
    }
    console.log(`Sequência de Fibonacci (${n} termos): ${resultado}`);
}
