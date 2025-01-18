// Set initial index for the carousel
let index = 0;

// Function to show the images
const showimages = (i) => {
    // Update the index
    index += i;

    // Get all images and dots
    const images = document.getElementsByClassName("image-fade");
    const dots = document.getElementsByClassName("dot");

    // Reset display for all images and active state for dots
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = "none";
        dots[j].className = dots[j].className.replace(" active", "");
    }

    // Handle index overflow
    if (index >= images.length) {
        index = 0;
    }
    if (index < 0) {
        index = images.length - 1;
    }

    // Display the current image and set the active dot
    images[index].style.display = "block";
    dots[index].className += " active";
};

// Initialize carousel on page load
document.addEventListener("DOMContentLoaded", () => {
    // Show the first image
    showimages(0);

    // Add click listeners for dots
    const dots = document.getElementsByClassName("dot");
    for (let k = 0; k < dots.length; k++) {
        dots[k].addEventListener("click", () => {
            index = k; // Set index to the clicked dot
            showimages(0); // Show the image corresponding to the clicked dot
        });
    }
});
