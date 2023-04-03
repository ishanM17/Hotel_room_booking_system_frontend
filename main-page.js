//image slider

let index = 0;
slideshow();

function slideshow() {
    var i;

    var num_image = document.getElementsByClassName("div-img");
    for (i = 0; i < num_image.length; i++) {
        num_image[i].style.display = "none";
    }

    index++;

    if (index > num_image.length) {
        index = 1;
    }

    num_image[index - 1].style.display = "block";

    setTimeout(slideshow, 2000);
}   