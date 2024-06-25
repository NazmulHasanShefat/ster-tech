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
// for laptop
let li_laptop = document.querySelector(".li-laptop a");
let ul_laptop = document.querySelector(".ul-laptop");

let li_all_laptop = document.querySelector(".li-all-laptop");
let ul_all_laptop = document.querySelector(".ul-all-laptop");
let li_ultrabook = document.querySelector(".li-ultrabook");
let ul_ultrabook = document.querySelector(".ul-ultrabook");
let li_laptop_bag = document.querySelector(".li-laptop-bag");
let ul_laptop_bag = document.querySelector(".ul-laptop-bag");

let li_laptop_acsosoris = document.querySelector(".li-laptop-acsosoris");
let ul_laptop_acsosori = document.querySelector(".ul-laptop-acsosoris");

let li_gaming_laptop = document.querySelector(".li-gaming-laptop");
let ul_gaming_laptop = document.querySelector(".ul-gaming-laptop");

li_laptop.addEventListener("click",()=>{
    ul_laptop.classList.toggle("hidden");
})
li_gaming_laptop.addEventListener("click",()=>{
    ul_gaming_laptop.classList.toggle("hidden");
})
li_all_laptop.addEventListener("click",()=>{
    ul_all_laptop.classList.toggle("hidden");
})
li_ultrabook.addEventListener("click",()=>{
    ul_ultrabook.classList.toggle("hidden");
})
li_laptop_acsosoris.addEventListener("click",()=>{
    ul_laptop_acsosori.classList.toggle("hidden");
})
li_laptop_bag.addEventListener("click",()=>{
    ul_laptop_bag.classList.toggle("hidden");
})
// for component
const li_component = document.querySelector(".li-component a");
const ul_component = document.querySelector(".ul-component");

const li_prosesor = document.querySelector(".li-prosesor a");
const ul_prosesor = document.querySelector(".ul-prosesor");
const li_cooler = document.querySelector(".li-cooler");
const ul_cooler = document.querySelector(".ul-cooler");
const li_water = document.querySelector(".li_water");
const ul_water = document.querySelector(".ul_water");
const li_motherbord = document.querySelector(".li_motherbord");
const ul_motherbord = document.querySelector(".ul_motherbord");
const li_graphics = document.querySelector(".li_graphics");
const ul_graphics = document.querySelector(".ul_griphics");

li_component.addEventListener("click",()=>{
    ul_component.classList.toggle("hidden");
})
li_prosesor.addEventListener("click",()=>{
    ul_prosesor.classList.toggle("hidden");
})
li_cooler.addEventListener("click",()=>{
    ul_cooler.classList.toggle("hidden");
})
li_water.addEventListener("click",()=>{
     ul_water.classList.toggle("hidden");
})
li_motherbord.addEventListener("click",()=>{
    ul_motherbord.classList.toggle("hidden");
})
li_graphics.addEventListener("click",()=>{
    ul_graphics.classList.toggle("hidden");
})