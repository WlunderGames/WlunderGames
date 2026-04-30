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
