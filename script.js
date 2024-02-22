/** botão de adicionar */
const add_btn = document.querySelector("#add");
/** botão de remover */
const rmv_btn = document.querySelector("#rmv");
/** Segunda div */
const other_div = document.querySelector("#outro")
/** Input de texto */
let txt_input = document.querySelector("#texto");
/** Div do botão "nome selecionado" */
const btn_slt = document.querySelector("#nm");
/** Div principal (primeira) */
const div_matrix = document.querySelector("#matriz");

/** Divs que estão com a classe nome */
const nomes = [...document.querySelectorAll(".nome")];
nomes.map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("selecionado");
    })
})

// Adiciona nomes e permite que ao clicar nos nomes adicionados eles recebam a classe de selecionado;
add_btn.addEventListener("click",() =>{
    if(txt_input.value != ""){
        /** instância de nova div com nome digitado */
        const novo_nome = document.createElement("div");
        novo_nome.setAttribute("class", "nome")
        novo_nome.innerHTML = txt_input.value;
        novo_nome.addEventListener("click", () => {
            novo_nome.classList.toggle("selecionado");
        })

        other_div.appendChild(novo_nome);
    }
})


// Remove nomes com a classe selecionados se for clicado em remover
rmv_btn.addEventListener("click", () => {
    const selecionados = [...document.querySelectorAll(".selecionado")];
    selecionados.map((e) => {
        other_div.removeChild(e);
    })
})

// Mostra
btn_slt.addEventListener("click", () => {
    const todos_nomes_plmds = [...document.querySelectorAll(".nome")];
    let todos_selecionados = todos_nomes_plmds.filter((val) => {
        if(val.classList.contains("selecionado"))
            return val;
    })
    todos_selecionados.map((el) =>{
        const p = document.createElement("p");
            p.innerHTML = el.innerHTML;
            p.setAttribute("class", "contem");
            div_matrix.appendChild(p);
    })
})


