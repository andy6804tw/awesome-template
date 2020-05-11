/*************/
const bd = document.body;
const header = document.querySelector("#header");
const logo = document.querySelector("#logo");
const links = document.querySelectorAll("a");
/*************/

let hideHeader = (event) => {
    let current = window.pageYOffset || window.scrollY;

    if (current > 200) {
        header.classList.add("is-header-hidden");
        logo.classList.add("is-logo-hidden");
    }
    else{
        header.classList.remove("is-header-hidden");
        logo.classList.remove("is-logo-hidden");
    }
}

let disabledLinks = (e) => { e.preventDefault(); }
/*************/

let mainFunction = (e) =>{
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", disabledLinks)
    }
}
/*************/
window.addEventListener("scroll", hideHeader);
window.addEventListener("load", mainFunction);
