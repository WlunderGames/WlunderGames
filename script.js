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
window.onscroll = function (e)
{
    const max = document.documentElement.scrollHeight - window.innerHeight
    var scroll = Math.round(window.scrollY/max*98)+1;
    anim.src=(`im (${scroll}).jpg`);
    //anim.src="img (" + scroll.toString() + ").jpg"
};