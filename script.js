const sidebar = document.querySelector(".sidebar");
const bar_button = document.querySelector(".bar_button");


bar_button.addEventListener("mouseover", (event) => {
    sidebar.style.display = "flex";
});
bar_button.addEventListener("mouseout", (event) => {
    sidebar.style.display = "none";
});
sidebar.addEventListener("mouseover", (event) => {
    sidebar.style.display = "flex";
});
sidebar.addEventListener("mouseout", (event) => {
    sidebar.style.display = "none";
});
const anim = document.querySelector(".anim_bg");
const total = 192;
let loaded = 0;

for (let i = 1; i <= total; i++) {
  const img = new Image();
  img.src = `frames_spin/{i}.png`;

  img.onload = () => {
    loaded++;
    console.log(`Cargadas: ${loaded}/${total}`);
    
    if (loaded === total) {
      console.log("Todas las imágenes cargadas");
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
