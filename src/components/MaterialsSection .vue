<template>
  <section id="materials" class="materials-section"> <!-- Изменил id на #materials -->
    <div class="container">
      <h2 class="section-title">Что мы покупаем</h2>
      <p class="section-subtitle">Принимаем на переработку вторичное сырье. Бесплатно предоставляем автотранспорт и грузчиков для вывоза.</p>

      <div class="materials-grid">
        <div v-for="material in materials" :key="material.id" class="material-card">
          <div class="card-icon">
            {{ material.icon }}
          </div>
          <h3 class="card-title">{{ material.title }}</h3>
          <p class="card-description" v-if="material.description">{{ material.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MaterialsSection', // Изменил имя компонента
  data() {
    return {
      materials: [
        { id: 1, title: 'Гофрокартон', icon: '📦', description: 'Коробки, упаковка' },
        { id: 2, title: 'Архив', icon: '📂', description: 'Документы на бумажных носителях' },
        { id: 3, title: 'Газеты и журналы', icon: '📰', description: 'Печатная продукция' },
        { id: 4, title: 'Книги', icon: '📚', description: 'Невостребованные книжные издания' },
        { id: 5, title: 'Полиэтиленовая плёнка', icon: '🛍️', description: 'Белая и цветная, стрейч' },
        { id: 6, title: 'Пластиковые ящики', icon: '🧃', description: 'Тара для продуктов и товаров' },
        // Можно добавить больше материалов
      ]
    }
  }
}
</script>

<style scoped>
.materials-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background-color: var(--color-bg-section);
  position: relative;
}

/* Декоративный элемент на фоне */
.materials-section::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -5%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(39, 174, 96, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
  z-index: 0;
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.section-subtitle {
  text-align: center;
  max-width: 600px;
  margin: 0 auto clamp(2.5rem, 5vw, 3.5rem);
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--color-text-light);
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: clamp(1.25rem, 2.5vw, 1.75rem);
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
  position: relative;
  z-index: 1;
}

.material-card {
  background: var(--color-bg-section);
  padding: clamp(1.5rem, 2.5vw, 2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  text-align: center;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.material-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.card-icon {
  font-size: clamp(2.5rem, 5vw, 3.5rem); /* УМЕНЬШИЛ РАЗМЕР ИКОНОК */
  margin-bottom: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1;
  transition: transform 0.3s ease;
}

.material-card:hover .card-icon {
  transform: scale(1.1);
}

.card-title {
  font-size: clamp(1.2rem, 1.8vw, 1.4rem);
  margin-bottom: 0.75rem;
  color: var(--color-secondary);
}

.card-description {
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  color: var(--color-text-light);
  margin-bottom: 0;
  line-height: 1.5;
}

.services-cta {
  text-align: center;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg) 100%);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--color-primary);
  max-width: 800px;
  margin: 0 auto;
}

.services-cta p {
  margin-bottom: 1.5rem;
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: white;
  padding: 0.9rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  text-decoration: none;
}

/* Адаптивность */
@media (max-width: 768px) {
  .materials-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    gap: 1.25rem;
  }

  .material-card {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .materials-grid {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  .services-cta {
    padding: 1.5rem 1rem;
  }
}
</style>