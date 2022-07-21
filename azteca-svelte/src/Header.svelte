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

  const menuItems = ["Pest Control", "Pools", "Landscaping"];
</script>

<template>
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
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </svelte:head>
  <div id="fb-root"></div>

  <!-- Your customer chat code -->
  <div
    class="fb-customerchat"
    attribution="setup_tool"
    page_id="456900321009808"
  ></div>

  <header>
    <div class="header">
      <div class="bg-army-50 p-10">
        <div class="grid grid-cols-1">
          <img
            class="max-h-[22vh] w-full"
            src="/resources/images/general/aztecaLogo.svg"
            alt="AZTECA Logo"
          />
        </div>
        <div class="grid grid-rows-2 justify-center">
          <div class="mt-4 flex items-center">
            <svg
              class="h-[40px] w-[40px] fill-army-600"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path
                d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
              />
            </svg>
            <h3 class="text-3xl text-army-800">Call us today</h3>
          </div>
          <a href="tel:602-926-2021" class="text-3xl font-bold text-army-600"
            >(602)-926-2021</a
          >
        </div>
      </div>
      <!-- <nav class="h-auto bg-army-300"> -->
      <ul class="flex min-h-fit w-full flex-wrap bg-army-300">
        {#each menuItems as item}
        <li class="flex">
          <a
            href="https://www.facebook.com/AztecaHomeServices"
            class="whitespace-nowrap px-2 py-4 text-army-800 transition-[background] hover:bg-army-100"
            >{item}</a
          >
        </li>
        {/each}
      </ul>
      <!-- </nav> -->
    </div>
  </header>
</template>

<style></style>
