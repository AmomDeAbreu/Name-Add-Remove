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

const btn_af = document.querySelector("#add_af");

const btn_bf = document.querySelector("#add_bf");

let is_selected = false;
/** Divs que estão com a classe nome */
let nomes = [...document.querySelectorAll(".nome")];

//Mapeia os nomes que já estão presentes nas divs
nomes.map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("selecionado");
    })
})

function adicionar(){
    const new_name = document.createElement("div")
    new_name.setAttribute("class", "nome")
    new_name.innerText = txt_input.value;
    // É necessário um toggle específico para os nomes que estão sendo adicionados
     new_name.addEventListener("click", () => {
         new_name.classList.toggle("selecionado");
     })

     return new_name;
}

// Adiciona nomes e permite que ao clicar nos nomes adicionados eles recebam a classe de selecionado;
add_btn.addEventListener("click",() =>{
    
    if(txt_input.value != "" && other_div.children.length <= 7 && txt_input.value.length < 19){
        /** instância de nova div com nome digitado */
        let new_name;
        new_name = adicionar(new_name);
        other_div.appendChild(new_name);
    } 

})


btn_bf.addEventListener("click", () => {
    nomes = [...document.querySelectorAll(".nome")];
    nomes.map((el) => {
        if(el.classList.contains("selecionado")){
            is_selected = true;
        }
    })
    
    if(is_selected && txt_input.value != "" && other_div.children.length <= 7 && txt_input.value.length < 19){
        let new_name;
        new_name = adicionar(new_name);
        nomes.map((el) => {
            if(el.classList.contains("selecionado")){
                el.parentNode.insertBefore(new_name, el.previousSibling);
            }
        })

    }
})


btn_af.addEventListener("click", () => {
    nomes = [...document.querySelectorAll(".nome")];
    nomes.map((el) => {
        if(el.classList.contains("selecionado")){
            is_selected = true;
        }
    })
    
    if(is_selected && txt_input.value != "" && other_div.children.length <= 7 && txt_input.value.length < 19){
        let new_name;
        new_name = adicionar(new_name);
        nomes.map((el) => {
            if(el.classList.contains("selecionado")){
                el.parentNode.insertBefore(new_name, el.nextSibling);
            }
        })

    }
    
})



// Remove nomes com a classe selecionados se for clicado em remover
rmv_btn.addEventListener("click", () => {

    /** Variável local para pegar valores selecionados */
    const selecionados = [...document.querySelectorAll(".selecionado")];
    selecionados.map((e) => {
        e.removeAttribute("class","selecionado");
        other_div.removeChild(e);
    })

})


// Mostra em um innertext o curso que foi seleciondo
btn_slt.addEventListener("click", () => {

    if(div_matrix.children.length < 12){

        const todos_nomes_plmds = [...document.querySelectorAll(".nome")];
        let todos_selecionados = todos_nomes_plmds.filter((val) => {
            if(val.classList.contains("selecionado"))
                return val;
        })

        todos_selecionados.map((el) =>{

            const p = document.createElement("p");
            p.innerText = el.innerText;
            p.setAttribute("class", "contem");
            div_matrix.appendChild(p);
        })

    }

})