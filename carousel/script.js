const images = document.querySelectorAll(".img");
const carousel = document.querySelector(".carousel-images");

var imageIndex = 0;


images.forEach((image, index) => {
  image.style.left = `${index * 100}%`
});

const changeImage = () => {
  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
 

};


const prev = () => {
    // alert("previos")
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  changeImage();
};

const next = () => {
    // alert("next")
 imageIndex = (imageIndex + 1) % images.length;
  changeImage();
};






setInterval(() => {
  
  changeImage();
    
}, 5000);
