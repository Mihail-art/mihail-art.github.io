var nextImage = document.getElementById('next');
var prewImage = document.getElementById('prew');

nextImage.addEventListener("click", function () {
    var activeImage = document.querySelector('.active');
    if(activeImage.nextElementSibling) {
       activeImage.style.display = "none";
       activeImage.classList.remove('active');
       activeImage.nextElementSibling.classList.add('active');
       activeImage.nextElementSibling.style.display = "block";
       if(!activeImage.nextElementSibling.nextElementSibling) {
          this.classList.add('noActive');
       }
    }
});

prewImage.addEventListener("click", function () {
    var activeImage = document.querySelector('.active');
    if(activeImage.previousElementSibling) {
       activeImage.previousElementSibling.style.display = "none";
       activeImage.classList.remove('active');
       activeImage.previousElementSibling.classList.add('active');
       activeImage.previousElementSibling.style.display = "block";
       if(!activeImage.previousElementSibling.previousElementSibling) {
          this.classList.add('noActive');
       }
    }
});
