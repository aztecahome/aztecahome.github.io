document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.querySelector('.carousel');
  var carouselInstance = M.Carousel.init(carousel, {fullWidth: true, indicators: true});
  window.setInterval(function(){
    carouselInstance.next();
  }, 7000);

  var collapsible = document.querySelector('.collapsible');
  var collapsibleInstace = M.Collapsible.init(collapsible, {});
  
  var dropdowns = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(dropdowns, {});
});

var firstImg = document.querySelector('.carousel a img');
firstImg.onload = function(){
  var carousel = document.querySelector('.carousel');
  carousel.style.height = firstImg.height+"px";
}; // as soon as the first image in the carousel is rendered, resize the carousel appropriately