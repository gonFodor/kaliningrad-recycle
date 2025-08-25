<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">О компании</h2>
      <p class="section-subtitle">ЗАО «Калининградвторресурсы» - надёжный партнёр в переработке вторсырья с 1946 года</p>

      <div class="about-grid">
        <!-- Основная информация -->
        <div class="about-card main-card">
          <div class="about-content">
            <p>Наша компания прочно зарекомендовала себя как один из лидеров в сфере обращения с вторичным сырьем, осуществляя свою деятельность с середины прошлого века. Мы являемся членом Калининградской торгово-промышленной палаты и находимся в архиве членов Регионального Союза переработчиков отходов Калининградской области.</p>
            <p>В собственности предприятия - большая производственная база в Калининграде, современное оборудование и собственный парк автотранспорта.</p>
          </div>
          <div class="about-image">
            <div class="image-placeholder">
              <span>🏭</span>
              <p>Производственная база</p>
            </div>
          </div>
        </div>

        <!-- Преимущества -->
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">📋</div>
            <div class="advantage-content">
              <h3>Полный пакет документов</h3>
              <p>Подписываем Акт утилизации отходов с журналом движения, что позволяет уменьшить экологический сбор</p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🔄</div>
            <div class="advantage-content">
              <h3>Работаем с 1946 года</h3>
              <p>Опыт работы более 75 лет на рынке переработки вторичных ресурсов</p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🌱</div>
            <div class="advantage-content">
              <h3>Экологическая ответственность</h3>
              <p>50 кг переработанной макулатуры = 1 спасенное дерево</p>
            </div>
          </div>
        </div>

        <!-- Лицензия -->
        <div class="license-card">
          <div class="license-icon">📜</div>
          <div class="license-content">
            <h3>Лицензированная деятельность</h3>
            <p>Лицензия Ростехнадзора РФ № 39-00148 от 28.07.2016 года «на право обращения с отходами»</p>
          </div>
        </div>
      </div>

      <!-- Цитата -->
      <div class="quote-block">
        <div class="quote-icon">❝</div>
        <blockquote>
          С 1946 года перерабатываем макулатуру и пластик, превращая отходы в полезные товары. Работаем на современном оборудовании, заботясь об экологии Калининградской области.
        </blockquote>
        <div class="quote-author">— ЗАО «Калининградвторресурсы»</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutCompany'
}
</script>

<style scoped>
.about-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: linear-gradient(to bottom, var(--color-bg-light) 0%, var(--color-bg) 100%);
  position: relative;
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
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  color: var(--color-text-light);
  font-weight: 500;
}

.about-grid {
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 3rem);
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.about-card {
  grid-template-columns: 1fr 1fr;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: center;
  background: var(--color-bg-section);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.about-content {
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.7;
  color: var(--color-text-light);
}

.about-content p {
  margin-bottom: 1.5rem;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  text-align: center;
  padding: 2rem;
}

.image-placeholder span {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.image-placeholder p {
  color: var(--color-text-light);
  font-weight: 500;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(1.25rem, 2.5vw, 1.75rem);
}

.advantage-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background: var(--color-bg-section);
  padding: clamp(1.5rem, 2.5vw, 2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--color-border);
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.advantage-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.advantage-content h3 {
  font-size: clamp(1.2rem, 1.5vw, 1.3rem);
  margin-bottom: 0.75rem;
  color: var(--color-secondary);
}

.advantage-content p {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 0;
}

.license-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  padding: clamp(1.5rem, 2.5vw, 2rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.license-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.license-content h3 {
  font-size: clamp(1.3rem, 1.8vw, 1.5rem);
  margin-bottom: 0.5rem;
  color: white;
}

.license-content p {
  margin-bottom: 0;
  opacity: 0.9;
  line-height: 1.6;
}

.quote-block {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 3rem);
  background: var(--color-bg-section);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--color-primary);
}

.quote-icon {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

blockquote {
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  font-style: italic;
  line-height: 1.6;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  quotes: "“" "”" "‘" "’";
}

blockquote::before {
  content: open-quote;
}

blockquote::after {
  content: close-quote;
}

.quote-author {
  font-weight: 600;
  color: var(--color-primary);
  font-size: clamp(1rem, 1.2vw, 1.1rem);
}

/* Адаптивность */
@media (max-width: 968px) {
  .about-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .image-placeholder {
    padding: 1.5rem 1rem;
  }

  .image-placeholder span {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .advantage-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .license-card {
    flex-direction: column;
    text-align: center;
  }

  .quote-block {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .about-content {
    font-size: 1rem;
  }

  .advantage-icon {
    font-size: 2rem;
  }

  .license-icon {
    font-size: 2.5rem;
  }
}
</style>