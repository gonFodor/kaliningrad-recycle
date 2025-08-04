<template>
  <section id="about" class="about">
    <h2 class="section-title">О компании</h2>
    
    <div class="about-container">
      <!-- Основной исторический блок -->
      <div class="history-card">
        <p class="history-text">Наша компания прочно зарекомендовала себя как один из лидеров в нашей нише, осуществляя свою деятельность с середины прошлого века. Мы являемся членом Калининградской торгово-промышленной палаты и находимся в архиве членов Регионального Союза переработчиков отходов Калининградской области.</p>
        <p class="history-text">Мы имеем огромный опыт в сфере обращения с вторичным сырьем. В собственности предприятия большая производственная база в Калининграде, современное оборудование и большой парк автотранспорта.</p>
        <p class="history-text">Кроме того, по итогам года мы подписываем Акт утилизации отходов, который позволяет уменьшить экологический сбор. К этому акту мы прикладываем журнал движения отходов, который является неотъемлемой частью данного акта.</p>
      </div>

      <!-- Карточки с информацией -->
      <div class="info-cards">
        <div class="info-card">
          <h3 class="info-title">Лицензии</h3>
          <div class="info-content">
            Ростехнадзора РФ № 39-00148 от 28.07.2016 года «на право обращения с отходами»
          </div>
        </div>

        <div class="info-card">
          <h3 class="info-title">Экология в действии с 1946 года</h3>
          <div class="info-content">
            ЗАО «Калининградвторресурсы» — надёжный партнёр в переработке макулатуры и пластика. Мы даём вторую жизнь отходам, сохраняя природные ресурсы Калининградской области с помощью современного оборудования и проверенных технологий.
          </div>
        </div>

        <div class="info-card">
          <h3 class="info-title">Ваши отходы — ценное сырьё</h3>
          <div class="info-content">
            Принимаем и перерабатываем бумагу, картон и полимеры, направляя их на производство новой продукции. 50 кг макулатуры = 1 спасённое дерево. Работаем профессионально — для бизнеса и населения с 1946 года.
          </div>
        </div>
      </div>

      <!-- Цитата -->
      <div class="quote-card">
        <div class="quote-text">
          «С 1946 года перерабатываем макулатуру и пластик, превращая отходы в полезные товары. Работаем на современном оборудовании, заботясь об экологии Калининградской области.»
        </div>
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
.about {
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  max-width: min(1200px, 90%);
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  color: #2c3e50;
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.history-card {
  background: #f8f9fa;
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.history-text {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: clamp(1rem, 1.2vw, 1.1rem);
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
}

.info-card {
  background: white;
  padding: clamp(1.25rem, 2vw, 1.5rem);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.info-title {
  color: #27ae60;
  margin-bottom: 0.75rem;
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
}

.info-content {
  line-height: 1.5;
  color: #555;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
}

.quote-card {
  margin-top: 1rem;
  text-align: center;
}

.quote-text {
  display: inline-block;
  padding: clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(1.1rem, 1.8vw, 1.4rem);
  line-height: 1.5;
  color: #2c3e50;
  border: 2px solid #27ae60;
  border-radius: 15px;
  background: rgba(39, 174, 96, 0.05);
  max-width: 800px;
  font-style: italic;
}

@media (max-width: 768px) {
  .info-cards {
    grid-template-columns: 1fr;
  }
  
  .history-text, .info-content {
    font-size: 1rem;
  }
}
</style>