function calcular_imc(peso, altura) {
    return peso / (altura * altura);
}
function classificar_imc(valor_imc) {
    if (valor_imc < 18.5)
        return "Abaixo do peso";
    if (valor_imc <= 24.9)
        return "Peso Normal";
    return "Sobrepeso";
}
function exibir_laudo(nome, classificacao) {
    console.log(`Paciente: ${nome} - Status: ${classificacao}`);
}
export function exe10Func() {
    const nome = prompt("Nome do aluno:") || "Anônimo";
    const peso = Number(prompt("Peso (kg):"));
    const altura = Number(prompt("Altura (m):"));
    const imc = calcular_imc(peso, altura);
    const classe = classificar_imc(imc);
    exibir_laudo(nome, classe);
}
