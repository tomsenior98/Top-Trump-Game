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

// function randomNumber2() {
//     var random = Math.ceil(Math.random() * 12);
//     // console.log(random);
//     const image = document.getElementById("image2");
//     // if (random == 1) {
//     //     image.src = "./images/rooney.jpg";
//     // }
//     // if (random == 2) {
//     //     image.src = "./images/pogba.jpg";
//     // }
//     // if (random == 3) {
//     //    image.src = "./images/benteke.jpg";
//     // }
//     // if (random == 4) {
//     //    image.src = "./images/beckham.jpg";
//     // }
//     // if (random == 5) {
//     //     image.src = "./images/zlatan.jpg";
//     // }
//     // if (random == 6) {
//     //    image.src = "./images/zidane.jpg";
//     // }
//     image.src=`./images/${random}.png`;
//     console.log(image)

// }
// randomNumber2();

