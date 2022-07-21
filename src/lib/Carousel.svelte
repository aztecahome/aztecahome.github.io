<script>
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector(".carousel");
    var carouselInstance = M.Carousel.init(carousel, {
      fullWidth: true,
      indicators: true,
    });
    window.setInterval(function () {
      carouselInstance.next();
    }, 7000);

    var collapsible = document.querySelector(".collapsible");
    var collapsibleInstace = M.Collapsible.init(collapsible, {});

    var dropdowns = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(dropdowns, {});
    var firstImg = document.querySelector(".carousel a img");
    firstImg.onload = function () {
      var carousel = document.querySelector(".carousel");
      carousel.style.height = firstImg.height + "px";
    }; // as soon as the first image in the carousel is rendered, resize the carousel appropriately
  });
</script>

<div class="carousel carousel-slider">
  <a class="carousel-item" href="#one!"
    ><img
      alt="Beautifully Landscaped House"
      src="resources/images/landscape/general.jpg"
  /></a>
  <a class="carousel-item" href="#two!"
    ><img
      alt="Beautifully Landscaped House"
      src="resources/images/landscape/general1.jpg"
  /></a>
  <a class="carousel-item" href="#three!"
    ><img
      alt="Beautifully Landscaped House"
      src="resources/images/landscape/general2.jpg"
  /></a>
  <a class="carousel-item" href="#four!"
    ><img
      alt="Beautifully Landscaped House"
      src="resources/images/landscape/general3.jpg"
  /></a>
  <a class="carousel-item" href="#five!"
    ><img
      alt="Scorpion under black light"
      src="resources/images/pest/scorpion2.jpg"
  /></a>
  <a class="carousel-item" href="#six!"
    ><img alt="A swarm of bugs" src="resources/images/pest/bugs.jpg"
  /></a>
  <a class="carousel-item" href="#seven!"
    ><img alt="A Clean Pool" src="resources/images/pool/8.jpg"
  /></a>
  <a class="carousel-item" href="#eight!"
    ><img alt="A Clean Pool" src="resources/images/pool/18.jpg"
  /></a>
</div>

<style>
  .carousel {
    max-height: 900px;
    background-color: #dcedc8;
  }
</style>
