// ----- Variables -----

const body = document.querySelector("body")

// Menu
const menuButton = document.querySelector(".menu-button")
const menu = document.querySelector("nav")

// Counter
const counters = document.querySelectorAll('.value');
const speed = 500;

//Carrousel
const prevButtons = document.querySelectorAll(".button-container button[aria-label='vorige artikel']");
const nextButtons = document.querySelectorAll(".button-container button[aria-label='volgende artikel']");
const carrouselNews = document.querySelector(".news ul");
const itemWidthNews = document.querySelector(".news li");
const carrouselEvents = document.querySelector(".events ul")
const itemWidthEvents = document.querySelector(".events li")
const paginationWrapper = document.querySelector('.button-container');

// Vacatures
const vacancyContainer = document.querySelector('.vacancy-container');
const vacancies = document.querySelectorAll('.vacancy');

// ----- Code logic -----

document.addEventListener("DOMContentLoaded", (event) => {

    // Menu

    menuButton.addEventListener('click', function(){
        menu.classList.toggle('menu-opened')
        body.classList.toggle("menuOpen");
        document.documentElement.classList.toggle("no-scroll");
    })

    // Counter

    // if (counters) {
    //     counters.forEach(counter => {
    //         // Reset counter to 0 for animation
    //         counter.innerText = "0 leden";

    //         const animate = () => {
    //             const value = +counter.getAttribute('target-value');
    //             const currentText = counter.innerText;
    //             const currentValue = +currentText.replace(/\D/g, ''); // Extract numeric value

    //             const increment = Math.ceil(value / speed);
    //             const newValue = currentValue + increment;

    //             if (newValue < value) {
    //                 counter.innerText = `${newValue} leden`;
    //                 setTimeout(animate, 10);
    //             } else {
    //                 counter.innerText = `${value} leden`;
    //             }
    //         };

    //         animate();
    //     });
    // }

    // Carrousel buttons

    body.classList.add('js-enabled');

    // Carrousel

    prevButtons.forEach(prevButton => {
        prevButton.addEventListener("click", function () {
            if (carrouselNews && carrouselNews.scrollLeft > 0) {
                carrouselNews.scrollBy({
                    left: -itemWidthNews.offsetWidth,
                    behavior: "smooth",
                });
            }
            if (carrouselEvents && carrouselEvents.scrollLeft > 0) {
                carrouselEvents.scrollBy({
                    left: -itemWidthEvents.offsetWidth,
                    behavior: "smooth",
                });
            }
        });
    });
    
    nextButtons.forEach(nextButton => {
        nextButton.addEventListener("click", function () {
            if (carrouselNews && carrouselNews.scrollLeft + carrouselNews.clientWidth < carrouselNews.scrollWidth) {
                carrouselNews.scrollBy({
                    left: itemWidthNews.offsetWidth,
                    behavior: "smooth",
                });
            }
            if (carrouselEvents && carrouselEvents.scrollLeft + carrouselEvents.clientWidth < carrouselEvents.scrollWidth) {
                carrouselEvents.scrollBy({
                    left: itemWidthEvents.offsetWidth,
                    behavior: "smooth",
                });
            }
        });
    });

    // Dynamische hoogt vacatures berekenen
    
    if (vacancies.length > 0) {
        const firstVacancy = vacancies[0];
        const vacancyHeight = firstVacancy.offsetHeight;
        const gap = parseFloat(getComputedStyle(vacancyContainer).gap);
        
        // Update --vacancy-height variable
        document.documentElement.style.setProperty('--vacancy-height', `${vacancyHeight}px`);
        
        // Calculate the max height to show 3 vacancies including the gap
        const maxHeight = (vacancyHeight * 3) + (gap * 3);
        
        // Set the max-height of the list-view container
        document.querySelector('.list-view-container').style.maxHeight = `${maxHeight}px`;
    }
});
