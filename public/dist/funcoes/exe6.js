function calcularFolha(valorHora, qtdHoras) {
    const bruto = valorHora * qtdHoras;
    let irPercentual = 0;
    if (bruto <= 2428.80)
        irPercentual = 0;
    else if (bruto <= 2826.65)
        irPercentual = 7.5;
    else if (bruto <= 3751.05)
        irPercentual = 15;
    else if (bruto <= 4664.68)
        irPercentual = 22.5;
    else
        irPercentual = 27.5;
    const irValor = bruto * (irPercentual / 100);
    const inss = bruto * 0.10;
    const sindicato = bruto * 0.03;
    const valeTransp = bruto * 0.06;
    const valeAlim = bruto * 0.08;
    const fgts = bruto * 0.11;
    const totalDescontos = irValor + inss + sindicato + valeTransp + valeAlim;
    const liquido = bruto - totalDescontos;
    console.log(`Salário Bruto: (${valorHora} * ${qtdHoras}) : R$ ${bruto.toFixed(2)}`);
    console.log(`(-) IR (${irPercentual}%) : R$ ${irValor.toFixed(2)}`);
    console.log(`(-) INSS (10%) : R$ ${inss.toFixed(2)}`);
    console.log(`(-) SINDICATO (3%) : R$ ${sindicato.toFixed(2)}`);
    console.log(`(-) V. ALIMENTAÇÃO (8%) : R$ ${valeAlim.toFixed(2)}`);
    console.log(`(-) V. TRANSPORTE (6%) : R$ ${valeTransp.toFixed(2)}`);
    console.log(`FGTS (11%) : R$ ${fgts.toFixed(2)} (Não descontado)`);
    console.log(`Total de descontos : R$ ${totalDescontos.toFixed(2)}`);
    console.log(`Salário Líquido : R$ ${liquido.toFixed(2)}`);
}
export function exe6Func() {
    const vHora = Number(prompt("Valor da hora:"));
    const hMes = Number(prompt("Horas trabalhadas no mês:"));
    calcularFolha(vHora, hMes);
}
