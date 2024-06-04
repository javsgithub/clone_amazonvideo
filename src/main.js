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
        const header = document.querySelector(".header");
        const bgdImage = document.querySelector(".main-image");
        //const pseudoElement = window.getComputedStyle(bgdImage, "::before");
        
        if (window.scrollY > 0) {
            header.classList.add("header--background");
            console.log(header)
        } else {
            header.classList.remove("header--background"); 
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

// const profileHeader = document.querySelector(".nav__menu__profile");
// profileHeader.addEventListener("mouseover", function () {
//     const profile = document.querySelector(".profile");
//     profile.style.display = "block";    
// })

// const profile = document.querySelector(".profile");
// profile.addEventListener("mouseout", function () {
//     profile.style.display = "none";
// })




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