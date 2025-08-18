// Each section is represented by a dot on the side bar.
// Highlights the navigation dots corresponding to the section when scrolling and navigating the page.


// --------------------------------------------------
// VARIABLES
// --------------------------------------------------

// element container ul de la barre de navigation
const containerVerticalNav = document.body.querySelector("ul.vertical-nav__list-items");

// Definition of variables that point to DOM objects using the .nav_page selector
const arrayOfNavPage = document.getElementsByClassName("nav-page");
console.log(`arrayOfNavPage is "${arrayOfNavPage}"`);
console.log(arrayOfNavPage);

// Definition of variables that point to the navigation dots, will be created and defined in main
let arrayOfDotsNav;

// Throttle variable for the scroll event listener
let isThrottled = false;

// For testing and debugging
let scrollCount = 0;




// --------------------------------------------------
// FUNCTIONS
// --------------------------------------------------

// Calcul du nombre de dots
// --------------------------------------------------

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

// Création des dots
// --------------------------------------------------

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

// retourne l'array de dot
const getDotsNav = () => document.getElementsByClassName("vertical-nav__point");


// Modification des dots
// --------------------------------------------------

// Reset la mise en page par défaut des dots
const resetDots = () => {
    Array.from(arrayOfDotsNav).forEach(dot => {
        dot.style.backgroundColor = "lightgrey";
        dot.style.width = "10px";
        dot.style.height = "10px";
    })
}

// Modify la mise en page du dot à mettre en avant
const makeBigger = (element) => {
    element.style.backgroundColor = "black";
    element.style.width = "12px";
    element.style.height = "12px";
};

// fonction callback pour l'écouter d'évenement scroll.
// mets en avant le bon dots. 
// Resets the dots layout, highlights the correct dot, manages the throttle.
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




// --------------------------------------------------
// MAIN
// --------------------------------------------------

// Test et debug
// --------------------------------------------------

console.log(nearestFromTheTop(arrayOfNavPage));
console.log(arrayOfNavPage[nearestFromTheTop(arrayOfNavPage)]);

console.log("-----------------------");
console.log("arrayOfNavPage.length is");
console.log(arrayOfNavPage.length);


// Création dynamique des point de la barre verticale de navigation
// --------------------------------------------------

resetVerticalNav();
createDots(arrayOfNavPage.length);
arrayOfDotsNav = getDotsNav();

console.log(`arrayOfDotsNav is "${arrayOfDotsNav}"`);
console.log(arrayOfDotsNav);



// Event handling - scroll
// --------------------------------------------------

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

