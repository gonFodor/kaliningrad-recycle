<template>
  <section id="about" class="about">
    <h2 class="section-title">О компании</h2>
    <div class="about-content">
      <div class="history">
        <p>Наша компания прочно зарекомендовала себя как один из лидеров в нашей нише, осуществляя свою деятельность с середины прошлого века. Мы являемся членом Калининградской торгово-промышленной палаты и находимся в архиве членов Регионального Союза переработчиков отходов Калининградской области.
Мы имеем огромный опыт в сфере обращения с вторичным сырьем. В собственности предприятия большая производственная база в Калининграде, современное оборудование и большой парк автотранспорта.
Кроме того, по итогам года мы подписываем Акт утилизации отходов, который позволяет уменьшить экологический сбор. К этому акту мы прикладываем журнал движения отходов, который является неотъемлемой частью данного акта.
</p>
      </div>
      <div class="licenses">
        <h3>Лицензии</h3>
        <div class="license-grid">
          <!-- Здесь будут лицензии -->
        </div>
      </div>
      <div class="gallery">
        <h3>Наша техника</h3>
        <div class="gallery-grid">
          <!-- Здесь будут фотографии -->
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
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
.about-content > div {
  margin-bottom: 2rem;
}
.license-grid, .gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>