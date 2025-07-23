<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-links">
        <h3>Навигация</h3>
        <ul>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#waste">Отходы</a></li>
          <li><a href="#about">О компании</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </div>
      <div class="footer-contacts">
        <h3>Контакты</h3>
        <p>Телефон: <a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      <div class="footer-legal">
        <h3>Реквизиты</h3>
        <p>ООО "Компания"</p>
        <p>ИНН 1234567890</p>
        <p>ОГРН 1234567890123</p>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; {{ currentYear }} Все права защищены</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  background: #333;
  color: white;
  padding: 2rem 0 0;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.footer a {
  color: #ddd;
  text-decoration: none;
}
.footer a:hover {
  color: white;
}
.copyright {
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  border-top: 1px solid #444;
}
</style>