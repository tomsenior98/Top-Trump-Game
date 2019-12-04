const image = document.getElementById("image1");
function randomNumber1() {
    var random = Math.ceil(Math.random() * 12)
     image.src=`./images/${random}.png`;
}
randomNumber1();

const images = document.getElementById("image2");
function randomNumber2() {
    var randoms = Math.ceil(Math.random() * 12)
     image2.src= `./images/${randoms}.png`;
}
randomNumber2();