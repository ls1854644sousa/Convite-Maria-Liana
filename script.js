// =========================
// ELEMENTOS
// =========================

const home = document.getElementById("home");
const invite = document.getElementById("invite");
const gift = document.getElementById("gift");

const openInvite = document.getElementById("openInvite");
const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnMaps = document.getElementById("btnMaps");
const btnGift = document.getElementById("btnGift");
const btnBack = document.getElementById("btnBack");

// =========================
// TROCAR TELA
// =========================

function show(screen){

    document
        .querySelectorAll(".screen")
        .forEach(item=>item.classList.remove("active"));

    screen.classList.add("active");

}

// =========================
// EVENTOS
// =========================

openInvite.addEventListener("click",()=>{

    show(invite);

});

btnGift.addEventListener("click",()=>{

    show(gift);

});

btnBack.addEventListener("click",()=>{

    show(invite);

});
btnWhatsapp.addEventListener("click", () => {

    alert("WhatsApp clicado");

});

btnMaps.addEventListener("click", () => {

    alert("Mapa clicado");

});

// =========================
// PRELOAD
// =========================

[
"assets/capa.jpg",
"assets/convite.jpg",
"assets/presentes.jpg"

].forEach(src=>{

    const img=new Image();

    img.src=src;

});
