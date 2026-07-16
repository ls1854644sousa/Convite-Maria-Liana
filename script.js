// =========================
// ELEMENTOS
// =========================

const home = document.getElementById("home");
const invite = document.getElementById("invite");
const gifts = document.getElementById("gifts");

const enter = document.getElementById("enter");
const gift = document.querySelector(".gift");
const back = document.querySelector(".back");

// =========================
// TROCAR TELA
// =========================

function show(page){

    document.querySelectorAll(".page").forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// =========================
// EVENTOS
// =========================

enter.onclick=()=>{

    show(invite);

}

gift.onclick=()=>{

    show(gifts);

}

back.onclick=()=>{

    show(invite);

}

// =========================
// BOTÃO VOLTAR ANDROID
// =========================

history.pushState(null,null,location.href);

window.addEventListener("popstate",()=>{

    if(gifts.classList.contains("active")){

        show(invite);

        history.pushState(null,null,location.href);

    }

    else if(invite.classList.contains("active")){

        show(home);

        history.pushState(null,null,location.href);

    }

});

// =========================
// PRELOAD DAS IMAGENS
// =========================

[
"assets/capa.jpg",
"assets/convite.jpg",
"assets/presentes.jpg"

].forEach(src=>{

const img=new Image();

img.src=src;

});
