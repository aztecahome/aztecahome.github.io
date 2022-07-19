<svelte:head>
  <title>Azteca Home Services</title>

  <meta charset="UTF-8" />
  <meta
    name="Description"
    content="Azteca Home Serives: Providing Pest Control, Pool, and Landscape services in the valley of Phoenix, AZ."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />

  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
</svelte:head>

<script>
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v3.3",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
</script>

<template>
  <div id="fb-root"></div>

  <!-- Your customer chat code -->
  <div
    class="fb-customerchat"
    attribution="setup_tool"
    page_id="456900321009808"
  ></div>

  <header>
    <div class="header">
      <div class="jumbo green lighten-5">
        <div class="row">
          <div class="col s12 m5 l4">
            <img
              class="jumboLogo"
              src="/resources/images/general/1.svg"
              alt="AZTECA Logo"
            />
          </div>
          <div class="col s12 m4 push-m3 l4 center">
            <ul class="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/AztecaHomeServices/"
                  target="_blank"
                  ><img
                    src="/resources/images/general/facebook-logo.svg"
                    alt="Facebook Logo"
                /></a>
              </li>
              <li>
                <a href="https://twitter.com/azteca_home" target="_blank"
                  ><img
                    src="/resources/images/general/twitter-logo.svg"
                    alt="Twitter Logo"
                /></a>
              </li>
              <li>
                <a href="https://www.yelp.com/biz/azteca-anthem" target="_blank"
                  ><img
                    src="/resources/images/general/yelp-logo.svg"
                    alt="Yelp Logo"
                /></a>
              </li>
            </ul>
          </div>
          <div class="col s12 l4 center callBanner">
            <h3><i class="material-icons">phone</i>Call Us Today</h3>
            <a href="tel:602-926-2021">(602)-926-2021</a>
          </div>
        </div>
      </div>
      <nav>
        <div class="nav-wrapper light-green lighten-4">
          <ul id="nav-mobile">
            <li class="light-green lighten-4 waves-effect">
              <a href="https://www.facebook.com/AztecaHomeServices">Home</a>
            </li>
            <li class="light-green lighten-4">
              <a
                class="dropdown-trigger"
                data-target="dropdown1"
                href="https://www.facebook.com/AztecaHomeServices"
                >Pest Control</a
              >
            </li>
            <ul id="dropdown1" class="dropdown-content">
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Our Process</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Termite Control</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Free Inspection</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Commercial</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Why Azteca?</a
                >
              </li>
            </ul>
            <li class="light-green lighten-4">
              <a
                class="dropdown-trigger"
                data-target="dropdown2"
                href="https://www.facebook.com/AztecaHomeServices"
                >Landscaping</a
              >
            </li>
            <ul id="dropdown2" class="dropdown-content">
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Our Process</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >General Maintenance</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Tree Removal</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Paving</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Free Inspection</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Commercial</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Why Azteca?</a
                >
              </li>
            </ul>
            <li class="light-green lighten-4">
              <a
                class="dropdown-trigger"
                data-target="dropdown3"
                href="https://www.facebook.com/AztecaHomeServices"
                >Pool</a
              >
            </li>
            <ul id="dropdown3" class="dropdown-content green-text">
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Our Process</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Pool Maintenance</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Pool Repair</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Free Inspection</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Commercial</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Why Azteca?</a
                >
              </li>
            </ul>
            <li class="light-green lighten-4 waves-effect">
              <a href="https://www.facebook.com/AztecaHomeServices">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
  nav ul a {
    color: #053c13;
  }

  nav ul a:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .social-icons li a {
    transition: all ease-in 0.25s;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .social-icons li a:hover {
    border: 2px solid #6faa6f;
    background-color: #6faa6f;
  }

  .social-icons li a:focus {
    border: 2px solid #6faa6f;
    background-color: #6faa6f;
  }

  .jumboLogo {
    max-height: 22vh;
    width: 100%;
  }
  .jumbo {
    /* background: url('http://aztecahomeservices.com/wp-content/uploads/headerbg2.jpg') no-repeat; */
    background-size: cover;
    padding: 10px;
  }
  .social-icons {
    display: block;
  }
  .social-icons li {
    display: inline-block;
  }
  .social-icons li a {
    display: block;
    padding: 10px 12px;
    border: 2px solid black;
    border-radius: 50px;
  }
  .social-icons li img {
    width: 25px;
  }

  .callBanner h3 {
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 2em;
  }
  .callBanner h3 i {
    font-size: 0.85em;
    margin-right: 5px;
  }
  .callBanner a {
    font-size: 2em;
    color: #1b6f1b;
    font-weight: bold;
  }
  @media screen and (max-width: 421px) {
    nav {
      min-height: 112px;
    }
  }
  @media screen and (max-width: 246px) {
    nav {
      min-height: 168px;
    }
  }
  @media screen and (max-width: 174px) {
    nav {
      min-height: 224px;
    }
  }
  .dropdown-content {
    min-width: 125px;
  }
  .dropdown-content li a {
    color: #1b5e20;
  }
</style>
