// ===== Elementos =====

const capa = document.getElementById("capa");
const convite = document.getElementById("convite");
const presentes = document.getElementById("presentes");

const abrirConvite = document.getElementById("abrirConvite");
const abrirPresentes = document.getElementById("abrirPresentes");
const voltarConvite = document.getElementById("voltarConvite");

// ===== Função para trocar de tela =====

function mostrarTela(telaAtual, novaTela){

    telaAtual.classList.remove("ativa");

    setTimeout(()=>{

        novaTela.classList.add("ativa");
        novaTela.classList.add("fade");

        setTimeout(()=>{
            novaTela.classList.remove("fade");
        },500);

    },250);

}

// ===== Abrir Convite =====

abrirConvite.addEventListener("click",()=>{

    mostrarTela(capa,convite);

});

// ===== Abrir Presentes =====

abrirPresentes.addEventListener("click",()=>{

    mostrarTela(convite,presentes);

});

// ===== Voltar =====

voltarConvite.addEventListener("click",()=>{

    mostrarTela(presentes,convite);

});

// ===== Evita zoom duplo =====

document.addEventListener("gesturestart",function(e){

    e.preventDefault();

});

// ===== Suporte ao botão voltar do Android =====

history.pushState(null,null,location.href);

window.onpopstate=function(){

    if(presentes.classList.contains("ativa")){

        mostrarTela(presentes,convite);
        history.pushState(null,null,location.href);

    }else if(convite.classList.contains("ativa")){

        mostrarTela(convite,capa);
        history.pushState(null,null,location.href);

    }

};
