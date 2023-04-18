var botaoBorda = document.getElementById("botao-borda");
var conteudo = document.getElementById("conteudo");
var textoBorda = document.getElementById("texto-borda");

var clicked = false;
var numeroDeCliques = 0;

botaoBorda.addEventListener("click", ()=> {
    if (clicked == false){
        console.log(numeroDeCliques)
        numeroDeCliques++;
        conteudo.style.outline = "5px solid orange";
        clicked = true;     
        botaoBorda.innerText = "Remover borda";
        textoBorda.innerText = "Você clicou " + numeroDeCliques + "x";
        textoBorda.style.transition = "0.3s ease";
        textoBorda.style.transform = `rotate(${numeroDeCliques}deg)`;
    }
    else {
        conteudo.style.outline = "0px solid orange";
        clicked = false;
        botaoBorda.innerText = "Adicionar borda";
    }
});

alertz.addEventListener("click", ()=>{ alert("Esse app foi desenvolvido por Nome do Aluno") })
