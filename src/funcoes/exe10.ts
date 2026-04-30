function calcular_imc(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function classificar_imc(valor_imc: number): string {
    if (valor_imc < 18.5) return "Abaixo do peso";
    if (valor_imc <= 24.9) return "Peso Normal";
    return "Sobrepeso";
}

function exibir_laudo(nome: string, classificacao: string): void {
    console.log(`Paciente: ${nome} - Status: ${classificacao}`);
}

export function exe10Func(): void {
    const nome = prompt("Nome do aluno:") || "Anônimo";
    const peso = Number(prompt("Peso (kg):"));
    const altura = Number(prompt("Altura (m):"));

    const imc = calcular_imc(peso, altura);
    const classe = classificar_imc(imc);
    exibir_laudo(nome, classe);
}
