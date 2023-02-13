"use strict" ;


const navbar = document.querySelector('[data-navbar]') ;
const navbarLinks = document.querySelectorAll('[data-nav-link]') ;
const navbarToggler = document.querySelector('[data-nav-toggler]') ;

navbarToggler.addEventListener("click",function () {
    navbar.classList.toggle("active") ;
    this.classList.toggle('active') ;
})

for (let i = 0; i < navbarLinks.length ; i++) {
    navbarLinks[i].addEventListener('click',function (){
        navbar.classList.toggle("active") ;
        this.classList.toggle('active') ;
    })
}

/**
 * search toggle ;
 */

 const searchTogglers = document.querySelectorAll('[data-search-toggler]') ;
 const searchBox = document.querySelector('[data-search-box]') ;

 for (let i = 0; i < searchTogglers.length; i++) {
    searchTogglers[i].addEventListener("click", function () {
      searchBox.classList.toggle("active");
    });
  }