/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
    }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    /*Active link*/
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    /*Remove menu mobile*/
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {delay: 200});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
// sr.reveal(".contact__input", { interval: 200 });

/*===== FORM =====*/
$(document).ready(function() {
    $('.button submit').click(function (event){
        console.log('button clicked')

        var name = $('#name').val()
        var email = $('#email').val()
        var message = $('#message').val()
        var statusElm = $('.status')
        statusElm.empty()
        
        if(name.length >= 2) {
            statusElm.append('<div>Name is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div>Name is not valid</div>')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(message.length >= 10) {
            statusElm.append('<div>Mesage is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div>Mesage is not valid</div>')
        }
    })
})