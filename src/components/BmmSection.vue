<template>
  <section id="research" class="page-section research-section">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
        {{ bmm.title }}
      </h2>
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <p class="text-center lead research-intro">
        As a researcher at the
        <a :href="bmm.instituteUrl" target="_blank" rel="noreferrer noopener">{{
          bmm.instituteLabel
        }}</a
        >, I study bird migration using weather radar and multi-sensor geolocator data.
      </p>

      <div class="row g-4 justify-content-center align-items-stretch">
        <a
          v-for="project in bmm.projects"
          :key="project.title"
          class="col-lg-6 text-decoration-none research-card-link"
          :href="project.url"
          :aria-label="`Open ${project.title}`"
        >
          <article class="research-item h-100">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.imageAlt"
              class="img-fluid mb-3 research-image"
            />
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </article>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bmm: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.research-section {
  background-color: #f3faf8;
}

.research-intro {
  margin-bottom: 1.75rem;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
}

.research-card-link {
  display: block;
  color: inherit;
  cursor: pointer;
}

.research-item {
  position: relative;
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.75rem;
  padding: 1rem 1rem 0.85rem;
  box-shadow: 0 0.35rem 0.9rem rgba(44, 62, 80, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.research-item h3 {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;
}

.research-item p {
  margin-bottom: 0;
  color: #5b6470;
}

.research-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 0.6rem;
  border: 1px solid #e9ecef;
  background: #f8f9fa;
  transition: transform 0.25s ease;
}

.research-card-link:hover .research-item,
.research-card-link:focus-visible .research-item {
  transform: translateY(-4px);
  border-color: #12806b;
  background-color: #f8fffd;
  box-shadow: 0 0.7rem 1.3rem rgba(18, 128, 107, 0.2);
}

.research-card-link:hover .research-item h3,
.research-card-link:focus-visible .research-item h3 {
  color: #12806b;
}

.research-card-link:hover .research-image,
.research-card-link:focus-visible .research-image {
  transform: scale(1.015);
}
</style>
