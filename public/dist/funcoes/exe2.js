function ler_temperatura() {
    return Number(prompt("Digite a temperatura atual da estufa:"));
}
function verificar_alerta_temperatura(temp) {
    return temp < 10 || temp > 30;
}
function emitir_mensagem_alerta(status_alerta) {
    if (status_alerta) {
        console.log("ALERTA: Temperatura fora da faixa ideal!");
    }
    else {
        console.log("Temperatura dentro da faixa normal.");
    }
}
export function exe2Func() {
    const t = ler_temperatura();
    const alerta = verificar_alerta_temperatura(t);
    emitir_mensagem_alerta(alerta);
}
