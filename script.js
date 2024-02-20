const add_btn = document.querySelector("#add");
const rmv_btn = document.querySelector("#rmv");
const other_div = document.querySelector("#outro")
let txt_input = document.querySelector("#texto");


const nomes = [...document.querySelectorAll(".nome")];
nomes.map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("selecionado");
    })
})


add_btn.addEventListener("click",() =>{
    if(txt_input.value != ""){
        const novo_nome = document.createElement("div");
        novo_nome.setAttribute("class", "nome")
        novo_nome.innerHTML = txt_input.value;
        other_div.appendChild(novo_nome);
    }
})






rmv_btn.addEventListener("click", () => {
    const selecionados = [...document.querySelectorAll(".selecionado")];
    selecionados.map((e) => {
        other_div.removeChild(e);
    })
})