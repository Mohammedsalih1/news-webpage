let toggleIcon = document.getElementById("toggle");
let closeIcon = document.getElementById("closeIcon");
let mainMenu = document.getElementById("menu");

toggleIcon.onclick = () => {
    mainMenu.style.top="0";
};
closeIcon.onclick = () => {
    mainMenu.style.top="-100%";
};