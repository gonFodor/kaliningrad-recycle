<template>
  <section id="contacts" class="contacts">
    <h2 class="section-title">Контакты</h2>
    <div class="contact-container">
      <div class="map">
        <!-- Здесь будет карта (например, Яндекс.Карты или Google Maps) -->
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A..." frameborder="0"></iframe>
      </div>
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Имя</label>
          <input id="name" v-model="form.name" type="text" required>
        </div>
        <div class="form-group">
          <label for="phone">Телефон</label>
          <input id="phone" v-model="form.phone" type="tel" required>
        </div>
        <div class="form-group">
          <label for="message">Сообщение</label>
          <textarea id="message" v-model="form.message"></textarea>
        </div>
        <button type="submit" class="btn">Отправить</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Логика отправки формы
      console.log('Форма отправлена:', this.form);
      // Можно добавить axios запрос к API
    }
  }
}
</script>

<style scoped>
.contacts {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.map {
  height: 400px;
}
.map iframe {
  width: 100%;
  height: 100%;
  border: none;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.form-group textarea {
  height: 100px;
}
.btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>