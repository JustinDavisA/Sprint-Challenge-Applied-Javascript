class Carousel {
    constructor(carouselElement){
        // assign this.carouselElement to the carouselElement DOM reference
        this.carouselElement = carouselElement;

        // Get the `data-tab` value from this.carouselElement and store it here
        this.carouselData = carouselElement.dataset;

        // Select all images
        this.imgs = document.querySelectorAll('.carousel img');

        // Select right and left buttons
        this.rgtBtn = document.getElementsByClassName('right-button');
        this.lftBtn = document.getElementsByClassName('left-button');
        
        // Map over the newly converted NodeList
        this.imgs = Array.from(this.imgs).map(imgs => new CarouselImg(imgs));
        
        // Add a click event that invokes this.rightClick
        this.rgtBtn.addEventListener('click', () => this.rightClick());

        // Add a click event that invokes this.leftClick
        this.lftBtn.addEventListener('click', () => this.leftClick());
    }

    rightClick() {
        this.rgtBtn.display = "none";
    }

    leftClick() {

    }
}

class CarouselImg {
    constructor(imgElement) {
        this.imgElement = imgElement;
    } 

    selectImg() {
        this.imgElement.style.display = "flex";
    }
}

let carousels = document.querySelectorAll('.carousel').forEach( caro => new Carousel(caro));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/