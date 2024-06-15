let humberger = document.querySelector(".menu-icon");
let main_menu = document.querySelector(".nav-2");
let liDesktop = document.querySelector(".li-desktop a");
let desktop_submenu = document.querySelector(".desktop-submenu");
let li_starPC = document.querySelector(".li-sterpc a");
let submenu_starPC = document.querySelector(".ul-sterpc");

// humberger
humberger.addEventListener("click",()=>{
    main_menu.classList.toggle("hidden")
})

liDesktop.addEventListener("click",()=>{
    desktop_submenu.classList.toggle("hidden");
})
li_starPC.addEventListener("click",()=>{
    submenu_starPC.classList.toggle("hidden");
})