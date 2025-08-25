<template>
  <section class="recycling-steps">
    <div class="container">
      <h2 class="section-title">Как происходит переработка</h2>
      <p class="section-subtitle">От сбора сырья до создания новых продуктов</p>
      
      <div class="steps-container">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-icon">{{ step.icon }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
        
        <!-- Стрелочки между этапами -->
        <div class="arrow" v-for="n in 3" :key="'arrow-' + n">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
            <path d="M30 10L40 10M40 10L35 5M40 10L35 15" stroke="var(--color-primary)" stroke-width="2"/>
            <path d="M0 10H30" stroke="var(--color-primary)" stroke-width="2" stroke-dasharray="4 4"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecyclingSteps',
  data() {
    return {
      steps: [
        {
          icon: '📦',
          title: 'Сбор сырья',
          description: 'Бесплатный вывоз вторсырья с помощью собственного транспорта'
        },
        {
          icon: '🗃️',
          title: 'Сортировка',
          description: 'Тщательная сортировка по типам материалов и категориям'
        },
        {
          icon: '⚙️',
          title: 'Прессовка',
          description: 'Использование гидравлических прессов для уплотнения сырья'
        },
        {
          icon: '🔄',
          title: 'Переработка',
          description: 'Превращение отходов в новое сырьё для производства'
        }
      ]
    }
  }
}
</script>

<style scoped>
.recycling-steps {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: var(--color-bg-section);
  position: relative;
  overflow: hidden;
}

.recycling-steps::before {
  content: '';
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, rgba(39, 174, 96, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
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
  margin: 0 auto clamp(3rem, 5vw, 4rem);
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  color: var(--color-text-light);
  font-weight: 500;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.step {
  background: var(--color-bg-section);
  padding: clamp(1.5rem, 2.5vw, 2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--color-border);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
}

.step-icon {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: clamp(1rem, 1.5vw, 1.25rem);
  transition: transform 0.3s ease;
}

.step:hover .step-icon {
  transform: scale(1.15) rotate(5deg);
}

.step-title {
  font-size: clamp(1.2rem, 1.8vw, 1.4rem);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.step-description {
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  color: var(--color-text-light);
  line-height: 1.5;
  margin-bottom: 0;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.arrow svg {
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.step:hover + .arrow svg,
.arrow:hover svg {
  opacity: 1;
}

/* Анимация для иконок */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.step-icon {
  animation: float 3s ease-in-out infinite;
}

.step:nth-child(1) .step-icon { animation-delay: 0s; }
.step:nth-child(3) .step-icon { animation-delay: 0.5s; }
.step:nth-child(5) .step-icon { animation-delay: 1s; }
.step:nth-child(7) .step-icon { animation-delay: 1.5s; }

/* Адаптивность */
@media (max-width: 1024px) {
  .steps-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 2rem 1rem;
  }
  
  .arrow {
    display: none;
  }
  
  .step:nth-child(odd) {
    grid-column: 1;
  }
  
  .step:nth-child(even) {
    grid-column: 2;
  }
}

@media (max-width: 640px) {
  .steps-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .step:nth-child(odd),
  .step:nth-child(even) {
    grid-column: 1;
  }
  
  .step {
    padding: 1.5rem 1rem;
  }
}

/* Декоративные элементы для каждого этапа */
.step:nth-child(1) {
  border-top: 4px solid #27ae60;
}

.step:nth-child(3) {
  border-top: 4px solid #3498db;
}

.step:nth-child(5) {
  border-top: 4px solid #e74c3c;
}

.step:nth-child(7) {
  border-top: 4px solid #f39c12;
}
</style>