// start design the image
// collect my Data
var landingPage = document.querySelector(".cinema");
let myImages = ["download.jpg", "3.jpg", "2.jpg", "images.jpg", "forpa.jpg", "title-bg-about.png"];
// changing background url


setInterval(() => {
    let randomeNumber = Math.floor(Math.random() * myImages.length);

    
landingPage.style.backgroundImage = 'url("assets/'+ myImages[randomeNumber]+'")';
}, 3000);
// end design the image background