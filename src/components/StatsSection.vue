<template>
  <section class="stats-section">
    <div class="container">
      <h2 class="section-title">Калининградвторресурсы в цифрах</h2>
      <p class="section-subtitle">Цифры, которые говорят сами за себя</p>
      
      <div class="stats-grid">
        <div class="stat-card" v-for="(stat, index) in stats" :key="index">
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-content">
            <div class="stat-number" :data-target="stat.number">0</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection',
  data() {
    return {
      stats: [
        {
          number: 77,
          icon: '📅',
          label: 'лет работы на рынке'
        },
        {
          number: 1000,
          icon: '👥',
          label: 'довольных клиентов'
        },
        {
          number: 500,
          icon: '⚖️',
          label: 'тонн перерабатываем ежегодно'
        },
        {
          number: 40,
          icon: '👨‍💼',
          label: 'квалифицированных сотрудников'
        }
      ]
    }
  },
  mounted() {
    this.startCounting();
  },
  methods: {
    startCounting() {
      const counters = document.querySelectorAll('.stat-number');
      const speed = 200; // Скорость анимации

      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = Math.min(count + increment, target);
          setTimeout(() => this.startCounting(), 1);
        }
      });
    }
  }
}
</script>

<style scoped>
.stats-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg) 100%);
  position: relative;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, rgba(39, 174, 96, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  position: relative;
  z-index: 1;
}

.stat-card {
  background: var(--color-bg-section);
  padding: clamp(1.5rem, 2.5vw, 2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.stat-icon {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: clamp(1rem, 1.5vw, 1.25rem);
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1);
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
}

.stat-label {
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  color: var(--color-text-light);
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
}

/* Анимация чисел */
.stat-number {
  transition: all 0.5s ease-in-out;
}

/* Адаптивность */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .stat-icon {
    font-size: 2.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}

/* Декоративные элементы */
.stat-card:nth-child(1) .stat-icon { color: #27ae60; }
.stat-card:nth-child(2) .stat-icon { color: #3498db; }
.stat-card:nth-child(3) .stat-icon { color: #e74c3c; }
.stat-card:nth-child(4) .stat-icon { color: #f39c12; }
</style>