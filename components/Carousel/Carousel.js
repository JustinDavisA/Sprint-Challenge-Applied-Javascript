class Carousel {
    constructor(carouselElement){
        // assign this.carouselElement to the carouselElement DOM reference
        this.carouselElement = carouselElement;

        // Get the `data-X` value from this.carouselElement and store it here
        this.carouselData = carouselElement.dataset;

        // Select all images
        this.imgs = document.querySelectorAll(`.slide-image`);

        // Map over the newly converted imgs NodeList
        this.imgs = Array.from(this.imgs).map(imgs => new CarouselImg(imgs));

        // Select right and left buttons
        this.rgtBtn = document.getElementsByClassName('right-button');
        this.lftBtn = document.getElementsByClassName('left-button');
        
        // Add a click event that invokes this.rightClick
        this.rgtBtn.addEventListener('click', () => this.rightClick());

        // Add a click event that invokes this.leftClick
        this.lftBtn.addEventListener('click', () => this.leftClick());

    }

    rightClick() {
        console.log("The right arrow was clicked!");
        // Iterate the image index counter to avoid overflow
        imgInd += imgInd; 

        // Reset the image index counter to avoid overflow
        if (imgInd > imgs.length) {
            imgInd = 0;
        } 
        
        // Select all images with the '.slide-image' class on them
        const slideImages = document.querySelectorAll('.slide-image');

        // Iterate through the NodeList displaying "none" each element
        slideImages.forEach(slideImg => slideImg.style.display = "none");

        // Looping through the this.imgs array and invoking selectImg()
        slideImages.forEach(img => img.selectImg(imgs[imgInd]));
        
    }

    leftClick() {
        // Iterate the image index counter to avoid overflow
        imgInd -= imgInd; 

        // Reset the image index counter to avoid overflow
        if (imgInd < 0) {
            imgInd = imgs.length;
        } 
        
        // Select all images with the '.slide-image' class on them
        const slideImages = document.querySelectorAll('.slide-image');

        // Iterate through the NodeList displaying "none" each element
        slideImages.forEach(slideImg => slideImg.style.display = "none");

        // Looping through the this.imgs array and invoking selectImg()
        this.imgs.forEach(img => img.selectImg(imgs[imgInd]));
    }
}

class CarouselImg {
    constructor(imgElement) {
        this.imgElement = imgElement;
    } 

    selectImg() {
        this.imgElement.style.display = "block";
    }
}

let carousels = document.querySelectorAll('.carousel').forEach( caro => new Carousel(caro));

// Set first image to default in carousel???
let imgInd = 0; 

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/