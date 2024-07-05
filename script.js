 
// mobile search
let search_icon_mobile = document.querySelector(".search-icon_mobile");
let search_box_mobile = document.querySelector(".search-mobile");
 
search_icon_mobile.addEventListener("click",()=>{
    search_box_mobile.classList.toggle("hidden");
})


 // If media query matches
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
    main_menu.classList.toggle("hidden");
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
const li_ram_desk = document.querySelector(".li_ram_desk");
const ul_ram_desk = document.querySelector(".ul_ram_desk");
const li_ram_laptop = document.querySelector(".li_ram_laptop");
const ul_ram_laptop = document.querySelector(".ul_ram_laptop");
const li_power_supply = document.querySelector(".li_power_supply");
const ul_power_supply = document.querySelector(".ul_power_supply");
const li_HardDisk = document.querySelector(".li_Harddisk");
const ul_HardDisk = document.querySelector(".ul_Harddisk");
const li_Portable_Hdd = document.querySelector(".li_Portable_HDD");
const ul_Portable_HDD = document.querySelector(".ul_Portable_HDD");
const li_SSD = document.querySelector(".li_SSD");
const ul_SSD = document.querySelector(".ul_SSD");
const li_Portable_SSD = document.querySelector(".li_Portable_SSD");
const ul_Portable_SSD = document.querySelector(".ul_Portable_SSD");
const li_casing = document.querySelector(".li_casing");
const ul_casing = document.querySelector(".ul_casing");
const li_casing_cooler = document.querySelector(".li_casing_cooler");
const ul_casing_cooler = document.querySelector(".ul_casing_cooler");
const li_optical_driver = document.querySelector(".li_optical_driver");
const ul_optical_driver = document.querySelector(".ul_optical_driver");

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
li_ram_desk.addEventListener("click",()=>{
    ul_ram_desk.classList.toggle("hidden");
})
li_ram_laptop.addEventListener("click",()=>{
    ul_ram_laptop.classList.toggle("hidden");
})
li_power_supply.addEventListener("click",()=>{
    ul_power_supply.classList.toggle("hidden");
})
li_HardDisk.addEventListener("click",()=>{
    ul_HardDisk.classList.toggle("hidden");
})
li_Portable_Hdd.addEventListener("click",()=>{
    ul_Portable_HDD.classList.toggle("hidden");
})
li_SSD.addEventListener("click",()=>{
    ul_SSD.classList.toggle("hidden");
})
li_Portable_SSD.addEventListener("click",()=>{
    ul_Portable_SSD.classList.toggle("hidden");
})
li_casing.addEventListener("click",()=>{
    ul_casing.classList.toggle("hidden");
})
li_casing_cooler.addEventListener("click",()=>{
    ul_casing_cooler.classList.toggle("hidden");
})
li_optical_driver.addEventListener("click",()=>{
    ul_optical_driver.classList.toggle("hidden");
})

// monitor
const li_monitor = document.querySelector(".li_monitor");
const ul_monitor = document.querySelector(".ul_monitor");
const li_UPS = document.querySelector(".li_UPS");
const ul_UPS = document.querySelector(".ul_UPS");
const li_phone = document.querySelector(".li_phone");
const ul_phone = document.querySelector(".ul_phone");
const li_tablet = document.querySelector(".li_tablet a");
const ul_tablet = document.querySelector(".ul_tablet");

li_monitor.addEventListener("click",()=>{
    ul_monitor.classList.toggle("hidden");
})
li_UPS.addEventListener("click",()=>{
    ul_UPS.classList.toggle("hidden");
})
li_phone.addEventListener("click",()=>{
    ul_phone.classList.toggle("hidden");
})
li_tablet.addEventListener("click",()=>{
    ul_tablet.classList.toggle("hidden");
})

