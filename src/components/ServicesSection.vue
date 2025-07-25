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
  padding: 4rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
}
.section-title {
  text-align: center;
  margin-bottom: 2rem;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
.service-card {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
.service-card:hover {
  transform: translateY(-5px);
}
.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>