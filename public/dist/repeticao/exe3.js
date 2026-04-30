export function exe3Rep() {
    let totalSalarios = 0;
    let maiorSalario = -1;
    let nomeMaiorSalario = "";
    let qtdMasc = 0;
    let qtdFem = 0;
    let continuar = true;
    while (continuar) {
        const nome = prompt("Nome do operário:") || "Sem nome";
        const horas = Number(prompt("Horas trabalhadas:"));
        const valorHora = Number(prompt("Valor por hora:"));
        const sexo = (prompt("Sexo (M/F):") || "").toUpperCase();
        const salario = horas * valorHora;
        totalSalarios += salario;
        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaiorSalario = nome;
        }
        if (sexo === "M")
            qtdMasc++;
        else if (sexo === "F")
            qtdFem++;
        continuar = confirm("Deseja cadastrar outro operário?");
    }
    const totalOperarios = qtdMasc + qtdFem;
    const percMasc = totalOperarios > 0 ? (qtdMasc / totalOperarios) * 100 : 0;
    const percFem = totalOperarios > 0 ? (qtdFem / totalOperarios) * 100 : 0;
    console.log(`Salário total da equipe: R$ ${totalSalarios.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)} (${nomeMaiorSalario})`);
    console.log(`Masculinos: ${qtdMasc} (${percMasc.toFixed(1)}%)`);
    console.log(`Femininos: ${qtdFem} (${percFem.toFixed(1)}%)`);
}
