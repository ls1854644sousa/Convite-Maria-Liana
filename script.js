document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");

    const home = document.getElementById("home");
    const invite = document.getElementById("invite");
    const gifts = document.getElementById("gifts");

    function show(page){
        pages.forEach(p => p.classList.remove("active"));
        page.classList.add("active");
    }

    document.getElementById("enter").addEventListener("click", () => {
        show(invite);
    });

    document.querySelector(".gift").addEventListener("click", () => {
        show(gifts);
    });

    document.querySelector(".back").addEventListener("click", () => {
        show(invite);
    });

});
