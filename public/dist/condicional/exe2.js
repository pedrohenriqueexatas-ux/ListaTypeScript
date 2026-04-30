export function exe2Cond() {
    var mes = Number(prompt("Digite em forma de número o mês: (Entre 1 e 12)"));
    if (mes >= 1 && mes <= 3) {
        if (mes === 1) {
            console.log("Janeiro: Verão");
        }
        else if (mes === 2) {
            console.log("Fevereiro: Verão");
        }
        else {
            console.log("Março: Verão");
        }
    }
    else if (mes <= 6) {
        if (mes === 4) {
            console.log("Abril: Outono");
        }
        else if (mes === 5) {
            console.log("Maio: Outono");
        }
        else {
            console.log("Junho: Outono");
        }
    }
    else if (mes <= 9) {
        if (mes === 7) {
            console.log("Julho: Inverno");
        }
        else if (mes === 8) {
            console.log("Agosto: Inverno");
        }
        else {
            console.log("Setembro: Inverno");
        }
    }
    else if (mes <= 12) {
        if (mes === 10) {
            console.log("Outubro: Primavera");
        }
        else if (mes === 11) {
            console.log("Novembro: Primavera");
        }
        else {
            console.log("Dezembro: Primavera");
        }
    }
    else {
        console.log("[Erro] Informe corretamente!");
    }
}
