'use strict';
const element = document.getElementById('arrow5'),
style = window.getComputedStyle(element),
right5 = style.getPropertyValue('transform');

const element2 = document.getElementById('arrow6'),
style2 = window.getComputedStyle(element2),
right6 = style.getPropertyValue('transform');

const element3 = document.getElementById('arrow7'),
style3 = window.getComputedStyle(element3),
right7 = style.getPropertyValue('transform');

const element4 = document.getElementById('arrow8'),
style4 = window.getComputedStyle(element4),
right8 = style.getPropertyValue('transform');

const dropElement = document.getElementById('dropdown');
const dropElement2 = document.getElementById('dropdown2');
const dropElement3 = document.getElementById('dropdown3');
const dropElement4 = document.getElementById('dropdown4');
const myElement = document.querySelector("#pepe-menu-id");

const button3 = document.getElementById("uploads");
const button4 = document.getElementById("uploads2");
const button5 = document.getElementById("uploads3");
const button6 = document.getElementById("uploads4");
const pepeButton = document.getElementById("pepe");

myElement.style.display = 'none';

button3.addEventListener('click', () => {
    hideMenu(right5, element, dropElement);
});
button4.addEventListener('click', () => {
    hideMenu(right6, element2, dropElement2);
});
button5.addEventListener('click', () => {
    hideMenu(right7, element3, dropElement3);
});
button6.addEventListener('click', () => {
    hideMenu(right8, element4, dropElement4);
});

pepeButton.onclick = function () {
    if (myElement.style.display == 'none') {
        myElement.style.display = 'inline';
  } else {
     myElement.style.display = 'none';
    }
};

const hideMenu =  (arrow, element, dropElement) => {
        arrow = window.getComputedStyle(element).getPropertyValue('transform');
    if (arrow == 'rotate(-45deg)' || arrow == 'matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)') {
        element.style.transform = "rotate(45deg)";
        arrow = 'rotate (45deg)';
        dropElement.style.display = "inline";
    } else {
        element.style.transform = "rotate(-45deg)";
        dropElement.style.display = "none";
        arrow = 'rotate(-45deg)';
    }
};











