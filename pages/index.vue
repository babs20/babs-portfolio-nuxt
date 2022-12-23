<template>
  <section class="px-4 py-8 bg-silver">
    <h1 class="font-bold font-display text-h3">
      I design human interface
    </h1>

    <p class="mt-3 font-normal font-body text-p3">
      Hello! I am a frontend developer passionate about producing efficient, accessible, and rewarding user interfaces. I love creatively solving problems and creating enjoyable user experiences!
    </p>

    <div class="mt-7 image-mask w-[330px] md:w-[370px] mx-auto">
      <svg class="inline w-full h-full m-0" width="339" height="340" viewBox="0 0 339 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12C0 5.37258 5.37258 0 12 0H326.374C333.241 0 338.707 5.75197 338.358 12.6102L330.345 170L338.329 326.821C338.689 333.889 332.887 339.731 325.817 339.42L169.5 332.541L12.5275 339.449C5.69969 339.749 0 334.295 0 327.46V12Z" fill="url(#paint0_linear_2_678)" />
        <path d="M329.346 169.949L329.343 170L329.346 170.051L337.33 326.872C337.66 333.35 332.341 338.706 325.861 338.421L169.544 331.542L169.5 331.54L169.456 331.542L12.4836 338.45C6.22472 338.725 1 333.725 1 327.46V12C1 5.92487 5.92487 1 12 1H326.374C332.668 1 337.679 6.27264 337.359 12.5593L329.346 169.949Z" stroke="#141F21" stroke-width="2" />
        <defs>
          <linearGradient id="paint0_linear_2_678" x1="169.5" y1="0" x2="169.5" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0.140625" stop-color="#FADEFF" />
            <stop offset="0.9996" stop-color="white" stop-opacity="0.078125" />
            <stop offset="0.9997" stop-color="white" />
            <stop offset="0.9998" stop-color="#FDBD18" stop-opacity="0.119358" />
            <stop offset="0.9999" stop-color="#FDB703" stop-opacity="0.130208" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div role="button" class="button relative font-medium text-white rounded-lg bg-emerald text-button px-7 py-3.5 inline-block font-body mt-9">
      Contact Me
    </div>
  </section>
</template>

<style>
.image-mask {
  position: relative;
}

.image-mask::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/person.png");
  background-repeat: no-repeat;
  background-size: 340px;
  background-position: 50% 31px;
  bottom: 2px;
  left: 0px;
  z-index: 0;
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-image: url("data:image/svg+xml,%3Csvg width='339' height='340' viewBox='0 0 339 340' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 12C0 5.37258 5.37258 0 12 0H326.374C333.241 0 338.707 5.75197 338.358 12.6102L330.345 170L338.329 326.821C338.689 333.889 332.887 339.731 325.817 339.42L169.5 332.541L12.5275 339.449C5.69969 339.749 0 334.295 0 327.46V12Z' fill='%23CCD0D2'/%3E%3Cpath d='M329.346 169.949L329.343 170L329.346 170.051L337.33 326.872C337.66 333.35 332.341 338.706 325.861 338.421L169.544 331.542L169.5 331.54L169.456 331.542L12.4836 338.45C6.22472 338.725 1 333.725 1 327.46V12C1 5.92487 5.92487 1 12 1H326.374C332.668 1 337.679 6.27264 337.359 12.5593L329.346 169.949Z' stroke='%231A2324' stroke-width='2'/%3E%3C/svg%3E%0A");
}

@media screen and (min-width: 1024px) {
  .image-mask {
    width: 370px;
    height: 370px;
    margin: 0 auto;
  }
}

.button {
  transition: all 0.25s ease-out;
  z-index: 1;
}

.button:hover {
  transform: translate(4px, -4px);
}

.button:hover::before {
  transform: translate(-4px, 4px);
}

.button::before {
  transition: all 0.25s ease-out;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  border: 1px solid theme('colors.emerald');
  border-radius: theme('borderRadius.lg');
  z-index: 0;
}
</style>
