const add_btn = document.querySelector("#add");
const rmv_btn = document.querySelector("#rmv");
const other_div = document.querySelector("#outro")
let txt_input = document.querySelector("#texto");


add_btn.addEventListener("click",() =>{
    if(txt_input.value != ""){
        const novo_nome = document.createElement("div");
        novo_nome.setAttribute("class", "nome m")
        novo_nome.innerHTML = txt_input.value;
        other_div.appendChild(novo_nome);
    }
})

const nomes = [...document.querySelectorAll(".nome")];

nomes.map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("selecionado");
    })
})

const selecionados = [...document.querySelectorAll(".selecionado")];
rmv_btn.addEventListener("click", () => {
    selecionados.map((el) => {
        other_div.removeChild(el);
    });
})