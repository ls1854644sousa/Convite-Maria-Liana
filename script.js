// =========================
// ELEMENTOS
// =========================

const home = document.getElementById("home");
const invite = document.getElementById("invite");
const gift = document.getElementById("gift");

const openInvite = document.getElementById("openInvite");
const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnMaps = document.getElementById("btnMaps");

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

    window.location.href = "https://wa.me/558587132705";

});

btnMaps.addEventListener("click", () => {

    window.location.href = "https://maps.app.goo.gl/1FCwzyHRL24pTqm19";

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
