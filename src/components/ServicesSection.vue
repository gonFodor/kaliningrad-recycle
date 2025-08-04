<template>
  <section id="services" class="services">
    <h2 class="section-title">Покупка вторичных отходов</h2>
    <div class="services-grid">
      <div v-for="service in services" :key="service.id" class="service-card">
        <div class="icon">{{ service.icon }}</div>
        <h2>{{ service.title }}</h2>
        <!--<p>{{ service.description }}</p>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  props: {
    services: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.services {
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  max-width: min(1000px, 90%);
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
}

.service-card {
  padding: clamp(1rem, 2vw, 1.5rem);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.icon {
  font-size: clamp(2rem, 6vw, 3rem);
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

.service-title {
  font-size: clamp(1rem, 1.25vw, 1.25rem);
  margin-bottom: 0.5rem;
}

/* Опционально для будущего описания */
.service-desc {
  font-size: clamp(0.875rem, 1vw, 1rem);
  color: #666;
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>