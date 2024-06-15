let humberger = document.querySelector(".menu-icon");
let main_menu = document.querySelector(".nav-2");
// sublist 
// list 1 
let liDesktop = document.querySelector(".li-desktop a");
let desktop_submenu = document.querySelector(".desktop-submenu");
// list 2
let li_starPC = document.querySelector(".li-sterpc a");
let submenu_starPC = document.querySelector(".ul-sterpc");

let li_gaming = document.querySelector(".li-gaming-pc");
let ul_gaming = document.querySelector(".ul-gaming-pc");

let li_all_in_one = document.querySelector(".li-all-in-one");
let ul_all_in_one = document.querySelector(".ul-all-in-one-pc");

let li_brand = document.querySelector(".li-brand-pc");
let ul_brand = document.querySelector(".ul-brand-pc");

let li_portable = document.querySelector(".li-portable-pc");
let ul_portable = document.querySelector(".ul-portable-pc");

// humberger
humberger.addEventListener("click",()=>{
    main_menu.classList.toggle("hidden")
})
// list toggle 
liDesktop.addEventListener("click",()=>{
    desktop_submenu.classList.toggle("hidden");
})
li_starPC.addEventListener("click",()=>{
    submenu_starPC.classList.toggle("hidden");
})
li_all_in_one.addEventListener("click",()=>{
    ul_all_in_one.classList.toggle("hidden");
})
li_gaming.addEventListener("click",()=>{
    ul_gaming.classList.toggle("hidden");
})
li_brand.addEventListener("click",()=>{
    ul_brand.classList.toggle("hidden");
})
li_portable.addEventListener("click",()=>{
    ul_portable.classList.toggle("hidden");
})