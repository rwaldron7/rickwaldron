// Script for toggling through photos in the image carousel on clicking left or right

const buttons = document.querySelectorAll("[data-carousel-button]")

console.log(buttons)

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// Script for displaying the nav links in mobile mode when the hamburger menu is pressed

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

// Search input on and off

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('search-active');
});




// Script for searching the website

const queryStart = document.getElementById('query');
const query = document.createElement('span');
const noResults = document.getElementById('no-results');
query.setAttribute("class","query");
const search = window.location.search.split('=')[1].split('+').join(' ').toLowerCase();
query.innerHTML = search;
queryStart.append(query);
const results = document.getElementsByClassName("search-results");
searchArray = search.split(' ');

console.log(searchArray);

for (i = 0; i < searchArray.length; i++) {
    for (j = 0; j < results.length; j++) {
        if (results[j].innerHTML.toLowerCase().includes(searchArray[i])) {
            results[j].style.display='block';
            noResults.style.display='none';
        }
    }

}



    




