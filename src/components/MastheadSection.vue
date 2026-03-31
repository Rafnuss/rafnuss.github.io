<template>
  <header class="masthead masthead-video text-white text-center">
    <video
      class="masthead-video-media"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/banner-poster.jpg"
      aria-hidden="true"
    >
      <source src="/banner-hero.mp4" type="video/mp4" />
    </video>
    <div class="masthead-video-overlay" aria-hidden="true"></div>
    <div class="container d-flex align-items-center flex-column masthead-content">
      <img class="masthead-avatar mb-5" src="/assets/logo_w.svg" alt="Raphaël Nussbaumer logo" />
      <h1 class="masthead-heading mb-0">{{ brandName }}</h1>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <p class="masthead-subheading fw-light mb-0">{{ tagline }}</p>
    </div>
    <p class="masthead-video-credit mb-0">
      Red Knot at Snettisham, UK
      <a href="https://ebird.org/checklist/S280752210" target="_blank" rel="noreferrer noopener">
        eBird checklist
      </a>
    </p>
  </header>
</template>

<script setup>
defineProps({
  brandName: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
});
</script>
