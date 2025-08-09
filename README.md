# Renaud's Portfolio

V090825-14:20  
As I am a French speaker, the fr_README.md file is likely to be the most up to date.

## Description
A Codeacademia project. It's a fullstack student portfolio. I copied the structure (not the code) of Ram Maheshwari's portfolio site for training, using CSS, HTML, and JS.

## Features
### Vertical Dot Navigation Bar
To help the user see where they are on the page. Each dot represents an h2. The h2 closest to the top of the window activates the corresponding dot to highlight it with a JS script.  
The script calculates, on each scroll event, the distances of each h2 from the top of the window using "getBoundingClientRect()". The h2 closest to the top of the window has its corresponding dot highlighted.  
The dots are manually added in a static way.

Possible improvements  
[] 1: Make the layout and number of dots dynamic. The script could automatically calculate the number of h2s and display the dots accordingly.  
[] 2: Make the sidebar interactive to allow the user to navigate through the page.

### Vertical Social Media Icon Bar

Will come

## Things Learned
### CSS Structure: BEM and SMACSS
Since I never really knew how to properly structure a CSS file, I did some research. I chose to use BEM combined with SMACSS (after discussing best practices with the AI).

#### SMACSS
SMACSS helps define important categories of CSS and to separate them clearly.  
1. Base  
2. Layout  
3. Modules => using BEM  
4. States  

To this, I added:

0. Variables  
5. Utilities  

I used (or at least tried to use) SMACSS specifications for naming classes, except for modules where I used BEM.

It is recommended to create a CSS file per category. Since this is a small site, I put everything in a single file.

#### BEM
For Block-Element-Modifier. It's a method for clearly naming classes. It doesn't use IDs, by the way... I’ll let you look it up for more details.  
I used it only for SMACSS modules.

### Grid Template
I wanted to try CSS Grid for the first time. I used grid-template-areas to structure the whole page. Even if it’s not strictly necessary in this situation, it allowed me to review the concept. ;)

## How to use
To be defined

## Technologies
CSS, HTML, JS

## Collaborators
As an exercise, I copied Ram Maheshwari's portfolio site: https://www.rammaheshwari.com/

## Licenses
To be defined