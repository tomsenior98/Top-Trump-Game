function randomNumber1() {
    var random = Math.ceil(Math.random() * 6)
    console.log(random);
    const image = document.getElementById("image1");
    // const image = document.getElementById("image2");

    if (random == 1) {
        image.src = "./images/messi.jpg";
    }
    if (random == 2) {
        image.src = "./images/wright.jpeg";
    }
    if (random == 3) {
       image.src = "./images/ramos.jpg";
    }
    if (random == 4) {
       image.src = "./images/vieira.jpg";
    }
    if (random == 5) {
        image.src = "./images/edu.jpeg";
    }
    if (random == 6) {
       image.src = "./images/theirry.jpg";
    }
}
randomNumber1();

function randomNumber2() {
    var random = Math.ceil(Math.random() * 6)
    console.log(random);
    const image = document.getElementById("image2");
    if (random == 1) {
        image.src = "./images/messi.jpg";
    }
    if (random == 2) {
        image.src = "./images/wright.jpeg";
    }
    if (random == 3) {
       image.src = "./images/ramos.jpg";
    }
    if (random == 4) {
       image.src = "./images/vieira.jpg";
    }
    if (random == 5) {
        image.src = "./images/edu.jpeg";
    }
    if (random == 6) {
       image.src = "./images/theirry.jpg";
    }
}
randomNumber2();



