// criar os objetos com os personagens - selecionar personagem aleatorio - 





function criarPersonagem(nome, frase){this.nome=nome,
this.frase=frase}

let personagens = [new criarPersonagem("reaper", "''não sou um psicopata, sou um psicopata extremamente funcional''"),
new criarPersonagem("Genji", "'MADA MADA'"),
new criarPersonagem("Cole Cacete", "''Hora de acertar as contas''"),
new criarPersonagem("Moira", "''Estupidez não é um direito''"),
new criarPersonagem("jynx","''Você acha que eu sou louca? Você devia ver minha irmã... ''" ),
new criarPersonagem("Vi", "''Aqui vou eu para salvar o dia ... ou acabar com ele''")]


let waifuName =  document.getElementById("nome")
let waifuFrase = document.getElementById("frase")
let botao = document.getElementById("botao")
let image = document.getElementsByClassName("images")


encontrar = function(){ let a = Math.round(Math.random()*5)


waifuName.innerHTML= personagens[a].nome;
waifuFrase.innerHTML= personagens[a].frase;
image[a].style="display:block";
botao.style="display:none"
botao1.style="display:inline-block" }


//POR UM BOTAO DE REFRESH PARA APARECER NO LLUGAR DO ENCONTRAR


botao.addEventListener("click",encontrar)

console.log(personagens[0].nome)

