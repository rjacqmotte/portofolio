// chaque section est représentée par un point sur la bar latéral.
// met en évidence les points de la barre de navigation correspondant à la section lorsqu'on scroll et on navigue sur la page.


// --------------------------------------------------
// Variables
//---------------------------------------------------


// définition des variables qui pointent les objets du DOM grâce au repère .nav_page
const arrayOfNavPage = document.getElementsByClassName("nav-page");
console.log(arrayOfNavPage);

// définition des variables qui pointent les point de navigation
const arrayOfDotsNav = document.getElementsByClassName("vertical-nav__point");
console.log(arrayOfDotsNav);

// variable de throttle pour l'écouteur évenement scroll
let isThrottled = false;

// pour test et debug
let scrollCount = 0;




// --------------------------------------------------
// Functions
//---------------------------------------------------

// fonction que reset les dots
const resetDots = () => {
    Array.from(arrayOfDotsNav).forEach(dot => {
        dot.style.backgroundColor = "lightgrey";
        dot.style.width = "10px";
        dot.style.height = "10px";
    })
}

// fonction qui modifie le point correspondant
const makeBigger = (element) => {
    element.style.backgroundColor = "black";
    element.style.width = "12px";
    element.style.height = "12px";
};

// fonction qui caclule et retourne l'index de l'élément le plus proche du haut de la page. prend un array d'élément.
const nearestFromTheTop = (arrayOfElements) => {
    
    // créé une array des distances par rapport au haut de la page pour chaque éléments
    let arrayOfDistance = [];
    Array.from(arrayOfElements).forEach(element => { 
        let infoObject = element.getBoundingClientRect();
        arrayOfDistance.push(infoObject.top);
    })
    console.log(arrayOfDistance);

    // selectione l'élément visible le plus proche du haut de l'écran
    // comme les éléments sont trié naturellement dans l'ordre de la page,
    // il suffit de trouver le premier élèment non négatif.
    return arrayOfDistance.findIndex(element => element > 0);
}

// reset la mise enpage des points, mets en évidences le bon point, gère le throttle
const changeDot = () => {
    // pour le débuggage
    
    console.log(`--- Fonction activée : ${scrollCount} --- `);
    
    resetDots();
    const navPageIndex = nearestFromTheTop(arrayOfNavPage);
    makeBigger(arrayOfDotsNav[navPageIndex]);

    //reset le throttle
    isThrottled = false;
};  


// --------------------------------------------------
// Main
//---------------------------------------------------

// test
console.log(nearestFromTheTop(arrayOfNavPage));
console.log(arrayOfNavPage[nearestFromTheTop(arrayOfNavPage)]);

// gestion des évenements
window.addEventListener("scroll", (event) => {
    
    console.log(`Scroll détecter : ${scrollCount}`);
    scrollCount++;

    //mise en place d'un "throttle" pour limiter l'activation du code par les scroll event 
    // test du throttle, on quitte la boucle si actif.
    if(isThrottled) return;
    isThrottled = true;
    //mise en route du timer.
    setTimeout(changeDot, 300);
    
})

