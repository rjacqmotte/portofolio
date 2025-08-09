// chaque section est représentée par un point sur la bar latéral.
// met en évidence les points de la barre de navigation correspondant à la section lorsqu'on scroll et on navigue sur la page.

// définition des variables qui pointent les objets du DOM grâce au repère .nav_page
const arrayOfNavPage = document.getElementsByClassName("nav-page");

// fonction qui caclule et retourne l'élément le plus proche du haut de la page. prend un array d'élément.
const nearestFromTheTop = (arrayOfElements) => {
    // créé une array des distances par rapport au haut de la page pour chaque éléments
    let arrayOfDistance = [];
    Array.from(arrayOfElements).forEach(element => { 
        let infoObject = element.getBoundingClientRect();
        arrayOfDistance.push(infoObject.top);
    })
    console.log(arrayOfDistance);
}

// test
nearestFromTheTop(arrayOfNavPage);

// définissions de la modification de mise en page.

// gestion des évenements
