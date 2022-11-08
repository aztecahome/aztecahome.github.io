<script>
  import Counter from "./lib/Counter.svelte";
  import MyHeader from "./Header.svelte";
  import MyFooter from "./Footer.svelte";
  import Announcement from "./lib/Announcement.svelte";
</script>

<template>
  <MyHeader />
  <main class="bg-army-100 text-army-800">
    <div
      class="grid grid-cols-1 items-center gap-4 bg-army-400 p-4 md:grid-cols-3"
    >
      <h4 class="text-2xl font-light text-army-50 md:col-span-2">
        Contact us for a free estimate
      </h4>
      <a
        href="https://www.facebook.com/AztecaHomeServices/"
        class="col-span-1 rounded bg-army-900 px-2 py-4 text-center text-lg font-bold text-army-50 transition-[background] hover:bg-army-300"
        >CONTACT US</a
      >
    </div>

    <div class="p-4">
      <h4 class="py-4 text-4xl font-light">Azteca Home Services</h4>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 grid grid-cols-12 gap-4 md:col-span-9">
          <img
            class="col-span-12 md:order-last md:col-span-6 lg:max-w-[400px]"
            src="resources/images/landscape/grass5.jpg"
            alt="Azteca Employees Working"
          />
          <p class="col-span-12 text-xl md:col-span-6">
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
        <div class="col-span-12 md:col-span-3">
          <h5 class="py-3 text-xl font-black">WHY AZTECA?</h5>
          <ul>
            <li>&check; Dedicated to Quality, Workmanship and Service</li>
            <li>&check; Licensed, Bonded and Insured</li>
            <li>&check; 100% Veteran Owned Business</li>
            <li>&check; Best in Industry Service / Customer Care Practices</li>
            <li>
              &check; Azteca is a nominee with Ranking Arizona as one of the
              <em>Top Family-Owned Businesses</em>.
            </li>
          </ul>
          <hr class="my-3 border-army-300" />
          <h5 class="py-2 text-xl font-black">OFFICE HOURS</h5>
          <ul>
            <li>Monday - Friday: 8:00am - 5:00pm</li>
            <li>Saturday, Sunday: Closed</li>
          </ul>
          <hr class="my-4 border-army-300" />
          <h5 class="py-2 text-xl font-black">TESTIMONIALS</h5>
          <div class="flex justify-center fill-army-600 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              class="h-[40px] w-[40px]"
            >
              <path d="m12 17 6 4-1-7 5-5h-7l-3-7-3 7H2l5 5-1 7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              class="h-[40px] w-[40px]"
            >
              <path d="m12 17 6 4-1-7 5-5h-7l-3-7-3 7H2l5 5-1 7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              class="h-[40px] w-[40px]"
            >
              <path d="m12 17 6 4-1-7 5-5h-7l-3-7-3 7H2l5 5-1 7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              class="h-[40px] w-[40px]"
            >
              <path d="m12 17 6 4-1-7 5-5h-7l-3-7-3 7H2l5 5-1 7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              class="h-[40px] w-[40px]"
            >
              <path d="m12 17 6 4-1-7 5-5h-7l-3-7-3 7H2l5 5-1 7z" />
            </svg>
          </div>
          <blockquote class="border-l-[6px] border-army-600 pl-4">
            "Wonderful customer service and awesome techs. They make sure to
            address all of your concerns and make sure they do all they can to
            help. Will never use a different company again."
            <br /><br />
            - Ashley L.
          </blockquote>
        </div>
        <div class="col-span-12 md:col-span-9 md:col-start-3">
          <h4 class="py-2 text-center text-3xl font-light">Our Services</h4>
          <ul class="text-xl">
            <li>
              <div class="py-2 font-bold">
                Residential and Commercial Pest Control
              </div>
              <div>
                Whether your need is small or large, Azteca can work for your
                home or business. Our residential process includes a six-step
                plan to get rid of your pests for good! To learn more about our
                pest control process and pricing, visit our
                <a
                  href="https://facebook.com/AztecaHomeServices/"
                  class="font-bold text-army-600"
                  >Pest Control Page</a
                >.
              </div>
            </li>
            <li>
              <div class="py-2 font-bold">Realtor Home Inspections</div>
              <div>
                We offer FREE inspections and estimates for realtors interested
                in our services and offer very competitive pricing.
                <a
                  href="https://www.facebook.com/AztecaHomeServices/"
                  class="font-bold text-army-600"
                  >Contact us</a
                >
                about your free estimate.
              </div>
            </li>
            <li>
              <div class="py-2 font-bold">
                Residential and Commercial Landscape Services
              </div>
              <div>
                We offer general maintenance, tree removal, weed control,
                shaping, reseeding and more! Whatever you need to keep your
                yard, lawn, or commercial landscaping in shape, we can do it!
                Please visit our
                <a
                  href="https://facebook.com/AztecaHomeServices/"
                  class="font-bold text-army-600"
                  >Landscaping Page</a
                >
                for more information about a our services.
              </div>
            </li>
            <li>
              <div class="py-2 font-bold">Pool Services</div>
              <div>
                Maintenance &amp; Repair: general maintenance, filter cleaning,
                pool acid washes, tile cleaning, and more! Just visit our
                <a
                  href="https://facebook.com/AztecaHomeServices/"
                  class="font-bold text-army-600"
                  >Pool Services</a
                >
                page to learn more about what we offer.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="p-4">
      <h4 class="py-4 text-center text-3xl font-light">Areas We Serve</h4>
      <div class="citiesLists grid grid-cols-12 gap-4 text-lg">
        <ul class="col-span-12 md:col-span-3">
          <li>Anthem</li>
          <li>El Mirage</li>
          <li>New River</li>
          <li>Scottsdale</li>
        </ul>
        <ul class="col-span-12 md:col-span-3">
          <li>Black Canyon City</li>
          <li>Glendale</li>
          <li>Pardise Valley</li>
          <li>Sun City</li>
        </ul>
        <ul class="col-span-12 md:col-span-3">
          <li>Glendale</li>
          <li>Luke AFB</li>
          <li>Peoria</li>
          <li>Sun City West</li>
        </ul>
        <ul class="col-span-12 md:col-span-3">
          <li>Cave Creek</li>
          <li>Morristown</li>
          <li>Phoenix</li>
          <li>Surprise</li>
          <li>Youngtown</li>
        </ul>
      </div>
    </div>
  </main>
  <div class="mb-[-4px] flex justify-end bg-army-100 px-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      clip-rule="evenodd"
      viewBox="0 0 60 72"
      class="w-[200px] max-w-full fill-army-200"
    >
      <path
        fill-rule="evenodd"
        d="M29 0c-4 0-8 4-8 9v21h-9V18a5 5 0 1 0-11 0v19c0 3 2 6 5 6h15v30a8 8 0 1 0 17 0V40h15c3 0 6-2 6-5V7c0-3-3-6-6-6s-5 3-5 6v21H38V9c0-5-4-9-9-9Z"
      />
    </svg>
  </div>
  <MyFooter />
</template>

<style>
  .citiesLists ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .citiesLists ul li {
    margin-bottom: 1rem;
  }
</style>
