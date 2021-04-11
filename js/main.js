console.log("javascript is now linked up");

let img = document.querySelector('img');
let jackson = document.querySelector('#jackson');
let person = document.querySelector('#person');
let paragraph = document.querySelector('p');

jackson.addEventListener('click', () => {
	img.src = 'images/image0.jfif';
	paragraph.innerText = 'Hello my name is Jackson! I am the main developer of this website and the Anhueser-Busch and Clear Care Plus website. I wrote all the code, designed the logos, and did all the design by myself! I have learned a lot from this first year of the program and am looking forward to continuing after the summer break '
})

person.addEventListener('click', () => {
	img.src = 'images/exist.jpg';
	paragraph.innerText = 'Hello I do not exist, Jackson was the only person who worked on both these projects :)'
}) 