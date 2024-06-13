// Getting the toggler this will work only in small or medium screen
// i have fetch the nav-toggle-btn from dom and stored in variable
const Nav_toggler=document.querySelector("#nav_toggler");


// classlist.toggle means that if the class is present remove if not then add


//after clicking on the toogle button nav links will be visible and after clicking again it will hide again
Nav_toggler.addEventListener("click",()=>{
    const links=document.querySelector("#nav_links");

    // This class will be toggle every time the user will click the button
    links.classList.toggle("nav_toggle_animation");
});


//getting and storing the toogle mode button div and storing it. 
const themeTogglediv=document.querySelector("#theme_toggle_div");


//setting the moon btn hidden
document.querySelector("#moon_icon").classList.add("icon-active");


//after clicking on the button this toggle
themeTogglediv.addEventListener("click",()=>{
    document.querySelector("#moon_icon").classList.toggle("icon-active");
    document.querySelector("#sun_icon").classList.toggle("icon-active");
    themeTogglediv.classList.toggle("theme_div_toggle")
});