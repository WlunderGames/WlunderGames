const sidebar = document.querySelector(".sidebar");
const bar_button = document.querySelector(".bar_button");
const first_title = document.querySelector(".first_title");
const second_title = document.querySelector(".second_title");
const quienes_somos = document.querySelector(".somos_container");
const text_title = document.querySelector(".text_title");
const razones = document.querySelector(".razones");
const lenis = new Lenis({
    autoRaf: true,
});

lenis.on(

    "scroll",

    ScrollTrigger.update

); /* Conectamos Lenis con ScrollTrigger */

function raf(time) {

    /* Función para animar el scroll */

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf); /* Iniciamos la animación del scroll */

// Inicializar ScrollTrigger para GSAP

gsap.registerPlugin(

    ScrollTrigger

);

const tl = gsap.timeline({

    /* Creamos una línea de tiempo */

    scrollTrigger: {

        trigger: first_title /* Activada por la sección naranja */,

        start: "top 25px" /* Comienza en la parte superior */,

        end: "+=50vh" /* Dura 3 pantallas */,

        pin: second_title,first_title,

        scrub: 1 /* Sincronizada con el scroll */,

    },

});
const tl2 = gsap.timeline({



    scrollTrigger: {

        trigger: quienes_somos ,

        start: "top 15%",

        end: "+=150%",

        pin: quienes_somos,

        scrub: 1 /* Sincronizada con el scroll */,

    },

});
const tl3 = gsap.timeline({



    scrollTrigger: {

        trigger: razones ,

        start: "top -4%",

        end: "300%",

        pin: razones,

        scrub: 1 /* Sincronizada con el scroll */,

    },

});
tl.to(first_title, {
    opacity: 0,
    //x: "-=20vw",
    duration: 1,
}).to(second_title, {
    opacity: 0,
    //x: "+=10vw",
    duration: 1,
});
tl2.to(text_title, {
    y: "-50%",
    duration: 1,
}).to(quienes_somos, {
    opacity: 0,
    duration: 0.1,
});
tl3.from(razones, {
    x: "-200%",
    duration: 0,
}).to(razones, {
    x: "-200%",
    duration: 1,
}).to(razones, {
    opacity: 0,
    duration: 0.1,
});

bar_button.addEventListener("mouseover", (event) => {
    sidebar.style.display = "flex";
    sidebar.style.opacity = "1";
});
bar_button.addEventListener("mouseout", (event) => {
    sidebar.style.display = "none";
    sidebar.style.opacity = 0;
});
sidebar.addEventListener("mouseover", (event) => {
    sidebar.style.display = "flex";
    sidebar.style.opacity = "1";
});
sidebar.addEventListener("mouseout", (event) => {
    sidebar.style.display = "none";
    sidebar.style.opacity = 0;
});
const anim = document.querySelector(".anim_bg");
const total = 192;
let loaded = 0;

for (let i = 1; i <= total; i++) {
    const img = new Image();
    img.src = `frames_spin/${i}.png`;

    img.onload = () => {
        loaded++;
        console.log(`Cargadas: ${loaded}/${total}`);

        if (loaded === total) {
            console.log(`Todas las imágenes cargadas ${img[1]}`);
        }
    };
}
window.onscroll = function (e)
{
    const max = document.documentElement.scrollHeight - window.innerHeight
    var scroll = Math.floor(window.scrollY/max*191)+1;
    anim.src=(`frames_spin/${scroll}.png`);
    //anim.src="img (" + scroll.toString() + ").jpg"
};
