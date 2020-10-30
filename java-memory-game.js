
const images = document.querySelectorAll('.memory-image');

let hasFlippedImage = false;
let lockBoard = false;
let firstImage, secondImage;
//rasturnare imagine
function flipImage() {

    if(lockBoard) return;
    if (this === firstImage) return;
    this.classList.toggle('flip');

    if (!hasFlippedImage) {
        //primul clic
        hasFlippedImage = true;
        firstImage = this;
       
        return;
    } 
        // al doilea clic
        hasFlippedImage = false;
        secondImage = this;
// verificați Pentru meci
        checkForMatch();
       
}
//Cautare potrivire
function checkForMatch() {
    let isMatch = firstImage.dataset.framework === secondImage.dataset.framework;
    
    isMatch ? disableImages() : unflipImages();
   
}
//dezactivare imagine, dupa ce avem potrivire
function disableImages() {

    firstImage.removeEventListener('click', flipImage);
    secondImage.removeEventListener('click', flipImage);

    resetBoard();
    alert("Congratulations")
}
//functie de desface imaginile, nu exista potrivire
function unflipImages() {
lockBoard = true;


    setTimeout(() => {
        firstImage.classList.remove('flip');
        secondImage.classList.remove('flip');
        
        resetBoard();
        alert("Try Again!")
        }, 1100);
        
}

//functie de restare 
function resetBoard() {
    //a rasturna imaginea
    [hasFlippedImage, lockBoard] = [false, false];
    [firstImage, secondImage] = [null, null];
}
//functie pentru amestecarea de imagine:
(function shuffle() {
    images.forEach(image => {
        let randomPos = Math.floor(Math.random() * 6);
        image.style.order = randomPos;
    });
});
//timer
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
  document.getElementById("seconds").innerHTML=pad(++sec%60);
  document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);

//intoarcere imagine
images.forEach(image => image.addEventListener('click', flipImage));