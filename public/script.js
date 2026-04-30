document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get("tipo");
    const container = document.getElementById("exercicios-dinamicos");

    if (container && tipo) {
        const categorias = {
            "condicional": { title: "Condicional", suffix: "Cond", count: 4 },
            "repeticao": { title: "Repetição", suffix: "Rep", count: 5 },
            "funcoes": { title: "Funções", suffix: "Func", count: 10 },
            "arrays": { title: "Arrays", suffix: "Array", count: 4 }
        };

        const config = categorias[tipo];
        if (config) {
            document.getElementById("titulo-dinamico").textContent = config.title;
            for (let i = 1; i <= config.count; i++) {
                const group = document.createElement("div");
                group.className = "exercise-group";
                group.style.display = "flex";
                group.style.gap = "10px";
                group.style.marginBottom = "15px";
                group.style.justifyContent = "center";

                const btnRodar = document.createElement("button");
                btnRodar.className = "btn";
                btnRodar.textContent = `Rodar Exercício ${i}`;
                btnRodar.onclick = () => {
                    if (window.rodar) window.rodar(`exe${i}${config.suffix}`);
                };

                const btnCodigo = document.createElement("button");
                btnCodigo.className = "btn btn-alt";
                btnCodigo.textContent = `Código`;
                btnCodigo.style.background = "#8D99AE";
                btnCodigo.onclick = () => {
                    if (window.verCodigo) window.verCodigo(`exe${i}${config.suffix}`);
                    alert("O código foi impresso no Console (F12)!");
                };

                group.appendChild(btnRodar);
                group.appendChild(btnCodigo);
                container.appendChild(group);
            }
        }
    }
});
