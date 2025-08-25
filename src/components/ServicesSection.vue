<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title">Наши услуги</h2>
      <p class="section-subtitle">Комплексные решения для бизнеса и экологии</p>
      
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="service-icon">{{ service.icon }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          icon: '🚛',
          title: 'Бесплатный вывоз',
          description: 'Собственный автопарк и грузчики для вывоза вторсырья'
        },
        {
          icon: '📋',
          title: 'Документы',
          description: 'Полный пакет документов для отчётности и снижения экосбора'
        },
        {
          icon: '⚙️',
          title: 'Оборудование',
          description: 'Установка прессов и контейнеров на вашей территории'
        },
        {
          icon: '📞',
          title: 'Консультации',
          description: 'Профессиональные консультации по обращению с отходами'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg) 100%);
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--color-secondary);
}

.section-subtitle {
  text-align: center;
  max-width: 600px;
  margin: 0 auto clamp(2.5rem, 5vw, 3.5rem);
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  color: var(--color-text-light);
  font-weight: 500;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.service-card {
  background: var(--color-bg-section);
  padding: clamp(1.5rem, 2.5vw, 2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--color-border);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.service-icon {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: clamp(1rem, 1.5vw, 1.25rem);
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-title {
  font-size: clamp(1.2rem, 1.5vw, 1.3rem);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
}

.service-description {
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  color: var(--color-text-light);
  line-height: 1.5;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>