document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[data-tab-button]");


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            escondeAbas ();
            aba.classList.add("movies__list--is-active");

            escondeBordas ();
            buttons[i].classList.add("movies__menu__button--is-active");                                               
        })
    }

})

window.addEventListener("scroll", function () {
        const nav = document.querySelector(".header__nav");
        const bgdImage = document.querySelector(".main-image");
        
        if (window.scrollY > 0) {
            nav.classList.add("header__nav--background");

        } else {
            nav.classList.remove("header__nav--background"); 
        }

        if (window.scrollY >= 100 && window.scrollY < 200) {
            bgdImage.style.setProperty("--afterOpac", ".5");

        } else if (window.scrollY >= 200 && window.scrollY < 300) {
            bgdImage.style.setProperty("--afterOpac", ".4");

        } else if (window.scrollY >= 300) {
            bgdImage.style.setProperty("--afterOpac", ".2");   
            
        } else {
            bgdImage.style.setProperty("--afterOpac", ".6");
        }
        console.log(scrollY);        
})

const more = document.getElementById("more");
const dropMenu = document.querySelector(".header__menu--drop");

more.addEventListener("mouseover", function () {
    dropMenu.classList.add("header__menu--show");
})

more.addEventListener("mouseout", function () {
    dropMenu.classList.remove("header__menu--show");
})

dropMenu.addEventListener("mouseover", function () {
    this.classList.add("header__menu--show");
})

dropMenu.addEventListener("mouseout", function () {
    this.classList.remove("header__menu--show");
})

function escondeAbas () {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("movies__list--is-active")
    }
}

function escondeBordas () {
    const buttons = document.querySelectorAll("[data-tab-button]");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("movies__menu__button--is-active");
    }
}