const navToggle = document.querySelector("nav-toggler");
navToggle.addEventListener("click", ()=>{
hideSection();
toggleNavBar();
})

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavBar(){
    document.querySelector
}