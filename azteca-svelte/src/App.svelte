<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import MyHeader from "./Header.svelte";
  import MyFooter from "./Footer.svelte";
  import Announcement from "./lib/Announcement.svelte";
</script>

<template>
  <MyHeader />
  <Announcement />
  <main>
    <div class="row light-green lighten-4 contactBanner">
      <div class="col s12 m8 center">
        <h4 class="green-text text-darken-2">Contact us for a free estimate</h4>
      </div>
      <div class="col s12 m4 center">
        <a
          href="https://www.facebook.com/AztecaHomeServices/"
          class="waves-effect btn btn-large green darken-2 white-text"
          >Contact Us</a
        >
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col s12 l9 row">
          <h4 class="mainTitle">Azteca Home Services</h4>
          <img
            class="col s12 m6 push-m6"
            src="resources/images/landscape/grass5.jpg"
            alt="Azteca Employees Working"
          />
          <p class="flow-text col s12 m6 pull-m6">
            Azteca Home Services is a full-service company that offers a wide
            variety of services to help maintain the necessities of your home
            and business. We service residential and commercial properties all
            over the valley. We offer individual services such as pest control,
            landscape services, and pool maintenance and repair. For those that
            need full services, we have made it convenient for our clients to
            bundle your services and save you money. You will be able to rely on
            us to handle all of these services during your scheduled
            appointment.
          </p>
        </div>
        <div class="col s12 l3 center sideBanner">
          <h5>WHY AZTECA?</h5>
          <ul>
            <li>Dedicated to Quality, Workmanship and Service</li>
            <li>Licensed, Bonded and Insured</li>
            <li>100% Veteran Owned Business</li>
            <li>Best in Industry Service / Customer Care Practices</li>
            <li>
              Azteca is a nominee with Ranking Arizona as one of the Top
              Family-Owned Businesses in the State of Arizona.
            </li>
          </ul>
          <hr />
          <h5>HOURS</h5>
          <p>
            Mon-Fri: 7:00AM - 7:00PM <br />
            Sat: 9:00AM - 5:00PM <br />
            Sun: CLOSED
          </p>
          <hr />
          <h5>TESTIMONIALS</h5>
          <i class="material-icons"> star </i>
          <i class="material-icons"> star </i>
          <i class="material-icons"> star </i>
          <i class="material-icons"> star </i>
          <i class="material-icons"> star </i>
          <blockquote>
            "Wonderful customer service and awesome techs. They make sure to
            address all of your concerns and make sure they do all they can to
            help. Will never use a different company again." - Ashley L.
          </blockquote>
        </div>
        <div class="col s12">
          <hr />
          <h4>Our Services</h4>
          <ul class="collapsible flow-text">
            <li class="active">
              <div class="collapsible-header">
                Residential and Commercial Pest Control
              </div>
              <div class="collapsible-body">
                Whether your need is small or large, Azteca can work for your
                home or business. Our residential process includes a six-step
                plan to get rid of your pests for good! To learn more about our
                pest control process and pricing, visit our
                <a href="https://facebook.com/AztecaHomeServices/"
                  >Pest Control Page</a
                >.
              </div>
            </li>
            <li>
              <div class="collapsible-header">Realtor Home Inspections</div>
              <div class="collapsible-body">
                We offer FREE inspections and estimates for realtors interested
                in our services and offer very competitive pricing.
                <a href="https://www.facebook.com/AztecaHomeServices/"
                  >Contact us</a
                >
                about your free estimate.
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                Residential and Commercial Landscape Services
              </div>
              <div class="collapsible-body">
                We offer general maintenance, tree removal, weed control,
                shaping, reseeding and more! Whatever you need to keep your
                yard, lawn, or commercial landscaping in shape, we can do it!
                Please visit our
                <a href="https://facebook.com/AztecaHomeServices/"
                  >Landscaping Page</a
                >
                for more information about a our services.
              </div>
            </li>
            <li>
              <div class="collapsible-header">Pool Services</div>
              <div class="collapsible-body">
                Maintenance &amp; Repair: general maintenance, filter cleaning,
                pool acid washes, tile cleaning, and more! Just visit our
                <a href="https://facebook.com/AztecaHomeServices/"
                  >Pool Services</a
                >
                page to learn more about what we offer.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row citiesList white-text flow-text">
      <div class="col s12 center">
        <h4>Areas We Serve</h4>
      </div>
      <div class="col s12 m3 center">
        <ul>
          <li>Anthem</li>
          <li>El Mirage</li>
          <li>New River</li>
          <li>Scottsdale</li>
        </ul>
      </div>
      <div class="col s12 m3 center">
        <ul>
          <li>Black Canyon City</li>
          <li>Glendale</li>
          <li>Pardise Valley</li>
          <li>Sun City</li>
        </ul>
      </div>
      <div class="col s12 m3 center">
        <ul>
          <li>Glendale</li>
          <li>Luke AFB</li>
          <li>Peoria</li>
          <li>Sun City West</li>
        </ul>
      </div>
      <div class="col s12 m3 center">
        <ul>
          <li>Cave Creek</li>
          <li>Morristown</li>
          <li>Phoenix</li>
          <li>Surprise</li>
          <li>Youngtown</li>
        </ul>
      </div>
    </div>
  </main>
  <MyFooter />
</template>

<style>
  .contactBanner {
    padding: 25px 15px;
  }
  .contactBanner h4 {
    text-transform: uppercase;
    font-weight: 700;
  }
  .contactBanner .btn {
    margin-top: 15px;
  }

  .mainTitle {
    font-weight: 300;
  }

  /* .sideBanner img {
     width: 150px;
     }
     .sideBanner ul {
     max-width: 45ch;
     margin-left: auto;
     margin-right: auto;
     }
     .sideBanner ul li:before {
     content: "\2714  ";
     }
     .sideBanner {
     font-size: 1.25em;
     }
     .sideBanner h5 {
     font-weight: 700;
     }
     .sideBanner i {
     font-size: 2em;
     color: #fdd835;
     } */

  blockquote {
    border-left: 5px solid #1b5e20;
    max-width: 55ch;
    margin-left: auto;
    margin-right: auto;
  }

  /* img.charms {
     width: 200px;
     }
   */

  .citiesList {
    padding: 20px 0;
    background-image: url("../resources/images/general/azBackground.jpg");
    background-size: cover;
    margin-bottom: 0;
    text-shadow: 2px 2px 8px #000000;
    background-position: center;
  }
  .citiesList h4 {
    font-weight: 300;
  }
  .citiesList ul {
    margin: 0;
  }
  .citiesList ul li {
    padding: 5px 0;
  }
</style>
