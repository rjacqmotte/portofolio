// Each section is represented by a dot on the side bar.
// Highlights the navigation dots corresponding to the section when scrolling and navigating the page.


// --------------------------------------------------
// Variables
// --------------------------------------------------

// element container ul de la barre de navigation
const containerVerticalNav = document.body.querySelector("ul.vertical-nav__list-items");

// Definition of variables that point to DOM objects using the .nav_page selector
const arrayOfNavPage = document.getElementsByClassName("nav-page");
console.log(`arrayOfNavPage is "${arrayOfNavPage}"`);
console.log(arrayOfNavPage);

// Definition of variables that point to the navigation dots
let arrayOfDotsNav = document.getElementsByClassName("vertical-nav__point");
console.log(`arrayOfDotsNav is "${arrayOfDotsNav}"`);
console.log(arrayOfDotsNav);

// Throttle variable for the scroll event listener
let isThrottled = false;

// For testing and debugging
let scrollCount = 0;




// --------------------------------------------------
// Functions
// --------------------------------------------------

// Reset the dots
const resetDots = () => {
    Array.from(arrayOfDotsNav).forEach(dot => {
        dot.style.backgroundColor = "lightgrey";
        dot.style.width = "10px";
        dot.style.height = "10px";
    })
}

// Modify the corresponding dot
const makeBigger = (element) => {
    element.style.backgroundColor = "black";
    element.style.width = "12px";
    element.style.height = "12px";
};

// Calculates and returns the index of the element closest to the top of the page. Takes an array of elements.
const nearestFromTheTop = (arrayOfElements) => {

    // Creates an array of distances from the top of the page for each element
    let arrayOfDistance = [];
    Array.from(arrayOfElements).forEach(element => {
        let infoObject = element.getBoundingClientRect();
        arrayOfDistance.push(infoObject.top);
    })
    console.log(arrayOfDistance);

    // Selects the visible element closest to the top of the screen
    // As the elements are naturally sorted in the order of the page,
    // it is enough to find the first non-negative element.
    return arrayOfDistance.findIndex(element => element > 0);
}

// Resets the dots layout, highlights the correct dot, manages the throttle
const changeDot = () => {
    // For debugging
    console.log(`--- Fonction activée : ${scrollCount} --- `);

    resetDots();
    const navPageIndex = nearestFromTheTop(arrayOfNavPage);
    if (navPageIndex >= 0) {
        makeBigger(arrayOfDotsNav[navPageIndex])
    };

    // Resets the throttle
    isThrottled = false;
};


// compte le nombre de point à ajouter à la barre de navigation

// reset et vide le container de la barre de navigation
const resetVerticalNav = () => {
    containerVerticalNav.innerHTML = "";
};

// ajoute des points dans la barre de navigation
//      1. crée li.vertical-nav__item à ajouter à ul.vertical-nav__list-item
//      2. crée div.vertical-nav__point à ajouter à li.vertical-nav__item
const createDots = (numberOfDots) => {
    const arrayOfDotsCont = [];
    const arrayOfDots = [];
    
    for (let i = 0; i < numberOfDots; i++) {
        const li = document.createElement("li");
        li.classList.add("vertical-nav__item");
        li.setAttribute("data-dot-index", i);

        const dot = document.createElement("div");
        dot.classList.add("vertical-nav__point");
        
        containerVerticalNav.appendChild(li);
        li.appendChild(dot);
    }    
};

// --------------------------------------------------
// Main
// --------------------------------------------------

// Test
console.log(nearestFromTheTop(arrayOfNavPage));
console.log(arrayOfNavPage[nearestFromTheTop(arrayOfNavPage)]);

console.log("-----------------------");
console.log("arrayOfNavPage.length is");
console.log(arrayOfNavPage.length);


// Création dynamique des point de la barre verticale de navigation
resetVerticalNav();
createDots(arrayOfNavPage.length);

arrayOfDotsNav = document.getElementsByClassName("vertical-nav__point");
console.log(`arrayOfDotsNav is "${arrayOfDotsNav}"`);
console.log(arrayOfDotsNav);

// Event handling
window.addEventListener("scroll", (event) => {

    scrollCount++;
    console.log(`Scroll détecter : ${scrollCount}`);


    // Set up a "throttle" to limit code activation by scroll events
    // Throttle test, exit the loop if active.
    if (isThrottled) return;
    isThrottled = true;
    // Start the timer.
    setTimeout(changeDot, 300);

})

