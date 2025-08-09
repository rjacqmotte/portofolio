# Renaud's Portofolio

V090825-14:20
Comme je suis francophone, le fichier fr_README.md est succeptible d'être le plus à jour.

## Descritpion
A codeacademia project. It's a Fullstack student portofolio. I copy the Ram Maheshawri's portofolio site structre (not the code) for training, using CSS, HTML et JS.

## Features
### Barre de navigation verticale à point
Pour aider l'utilisateur à voir ou il en est dans la navigation de la page. Chaque point représente un h2. le h2 le plus proche du haut de la fenêtre active le point correspondant pour le mettre en valeur avec un script js.
le script calcule à chaque scroll event les distances de chaques h2 par rapport au haut de la fenêtre avec "getBoundingClientRect()". le h2 le plus proche du haut de la fenêtre à son point correspondant qui est mis en valeur.
les points sont mis à la main de façon statique.

amélioration possible 
[] 1: rendre la mise en page et le nombre de point dynamique. Le script pourrait calculer tout seul le nombre de h2 et afficher automatiquement les points.
[] 2: rendre la barre latérale interactive pour permettre à l'utilisateur de naviguer dans la page.



### Barre d'icone verticale de réseau sociaux

will come

## choses apprises
### CSS strucuture: BEM and SMACCS
comme je ne sais jamais trop comment strucutrer un feuille css correctement, j'ai fais quelques recherches. j'ai choisi d'utiliser BEM combiné à SMACCS. (en papotant avec l'IA sur les bonne pratiques utilisée)

#### SMACCS
Smaccs permet de définir des catégories importantes de type de css et de bien les conscientiser et les séparer. 
1. Base
2. Layout
3. Modules => utilisation de BEM
4. States

à cela j'ai ajouté:

0. Variables
5. Utilities

J'ai utilisé (en tout cas essyé) les spécification de SMACCS pour nommer les classes. sauf pour les modules ou j'ai utiliser BEM.  

il est conseillé de faire un page css par catégorie. comme c'est un petit site j'ai tout mis dans une seule.

#### BEM
pour Block-Element-Modifer. C'est une méthode pour nommer clairement les classes. il utilise pas de ID d'ailleurs... je vous laisse faire une recherche pour avoir plus de détails.
Je l'ai utilisé uniquement pour les modules SMACSS.

### grid template
je voulais essayé le grid pour le découvrir une première fois. Utilisation de grid-template-areas pour strucutré tout la page. même si ce n'est pas spécialement nécessaire dans cette sitaution, cela m'a permis de faire une révidion ; )

## How to use
to be define

## Technologies
CSS, HTML, JS

## Colaborators
As exercice, I copy the Ram Maheshwari's portofolio site https://www.rammaheshwari.com/

## Licences
to be define
