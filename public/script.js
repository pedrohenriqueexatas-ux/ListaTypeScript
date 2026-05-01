document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("exercicios-dinamicos");
    const tabs = document.querySelectorAll(".tab-btn");

    const categorias = {
        "condicional": { title: "Condicional", suffix: "Cond", count: 4 },
        "repeticao": { title: "Repetição", suffix: "Rep", count: 5 },
        "funcoes": { title: "Funções", suffix: "Func", count: 10 },
        "arrays": { title: "Arrays", suffix: "Array", count: 9 }
    };

    function renderCategory(tipo) {
        if (!container) return;
        
        // Clear current
        container.innerHTML = "";
        const config = categorias[tipo];
        
        if (!config || config.count === 0) {
            container.innerHTML = "<div class='empty-state'>Nenhum exercício disponível nesta categoria ainda.</div>";
            return;
        }

        for (let i = 1; i <= config.count; i++) {
            const funcName = `exe${i}${config.suffix}`;
            
            const card = document.createElement("div");
            card.className = "exercise-card";
            
            const title = document.createElement("h3");
            title.textContent = `Exercício ${i}`;
            
            const actions = document.createElement("div");
            actions.className = "card-actions";
            
            const btnRodar = document.createElement("button");
            btnRodar.className = "btn";
            btnRodar.textContent = `Rodar`;
            btnRodar.onclick = () => {
                if (window.rodar) window.rodar(funcName);
            };

            const btnCodigo = document.createElement("button");
            btnCodigo.className = "btn btn-alt";
            btnCodigo.textContent = `Código`;
            btnCodigo.onclick = () => {
                if (window.verCodigo) window.verCodigo(funcName);
                alert("O código foi impresso no Console (F12)!");
            };

            actions.appendChild(btnRodar);
            actions.appendChild(btnCodigo);
            card.appendChild(title);
            card.appendChild(actions);
            
            container.appendChild(card);
        }
    }

    // Tab Logic
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderCategory(tab.dataset.target);
        });
    });

    // Initial render
    renderCategory("condicional");
});
