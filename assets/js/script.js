
//area de texto
const area1 = document.getElementById("area1")
document.getElementById("area1").focus()
const area2 = document.getElementById("area2")

//Botões
const encriptar = document.querySelector("#encriptar")
encriptar.addEventListener("click", encriptador)

const decriptar = document.querySelector("#decriptar")
decriptar.addEventListener("click", decriptador)

const copiar = document.getElementById("copiar")
copiar.addEventListener("click", copia)


//função de encriptar
    function encriptador(){


            
        if(area1.value.length === 0){
           alert("A area de texto não pode está vazia.")
          
        } else {
            area2.innerHTML = area1.value.
            replace(/[a|à|á|â|ã|ä|å]/gi, 'ai').
            replace(/[e|é|è|ê|ể|ë]/gi, 'enter').
            replace(/[i|í|ì|î]/gi, 'imes').
            replace(/[o|ó|ò|ô|ö]/gi, 'ober').
            replace(/[u|ú|ù|ü]/gi, 'ufat').
            replace(/[$|@|!|*|%||¨|{|}|#]/, " ")

            console.log(area2.textContent)

        }
        area1.value = ''
        area1.focus()
    }

//função de decriptar
function decriptador() {
    if(area1.value.length === 0 ){
        alert("A area de texto não pode está vazia.")
    } else {
            area2.innerHTML = area1.value.
            replace(/enter/gi, 'e').
            replace(/imes/gi, 'i').  
            replace(/ai/gi, 'a').     
            replace(/ober/gi, 'o').
            replace(/ufat/gi, 'u').
            replace(/[$|@|!|*|%||¨|{|}|#]/, " ")
            area1.value = ''
    }   
    area2.focus()
}

//função de copiar
function copia() {
    if (area2.value.length === 0) {
        alert("Area vazia, criptografe ou descriptografe um texto para poder copia-lo")
        
    }else{

        area2.select();
        document.execCommand("copy");
        area2.innerHTML = "Texto copiado com sucesso"

    }
}

//Rodape
let data = new Date()
year = data.getFullYear()
const ano = document.getElementById("copy")
ano.innerHTML += year


