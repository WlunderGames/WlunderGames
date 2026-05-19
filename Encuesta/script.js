const sidebar = document.querySelector(".sidebar");
const bar_button = document.querySelector(".bar_button");
const lenis = new Lenis({
    autoRaf: true,
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
