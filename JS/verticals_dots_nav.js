// Each section is represented by a dot on the side bar.
// Highlights the navigation dots corresponding to the section when scrolling and navigating the page.


// --------------------------------------------------
// Variables
// --------------------------------------------------


// Definition of variables that point to DOM objects using the .nav_page selector
const arrayOfNavPage = document.getElementsByClassName("nav-page");
console.log(arrayOfNavPage);

// Definition of variables that point to the navigation dots
const arrayOfDotsNav = document.getElementsByClassName("vertical-nav__point");
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


// --------------------------------------------------
// Main
// --------------------------------------------------

// Test
console.log(nearestFromTheTop(arrayOfNavPage));
console.log(arrayOfNavPage[nearestFromTheTop(arrayOfNavPage)]);

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

