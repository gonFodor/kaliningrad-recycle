<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3 class="footer-heading">Навигация</h3>
          <ul class="footer-links">
            <li><a href="#services" class="footer-link">Услуги</a></li>
            <li><a href="#about" class="footer-link">О компании</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-heading">Контакты</h3>
          <div class="footer-contacts">
            <p class="footer-contact-item">
              <span class="contact-label">Телефон:</span>
              <a href="tel:+74012632337" class="footer-link contact-link">+7 (401) 263-23-37</a>
            </p>
            <p class="footer-contact-item">
              <span class="contact-label">Email:</span>
              <a href="mailto:vtorres@bk.ru" class="footer-link contact-link">vtorres@bk.ru</a>
            </p>
          </div>
        </div>

        <div class="footer-section">
          <h3 class="footer-heading">Реквизиты</h3>
          <div class="footer-legal">
            <p class="footer-text">ЗАО "Калининградвторресурсы"</p>
            <p class="footer-text">ИНН 3907000720</p>
            <p class="footer-text">ОГРН 1023901641950</p>
            <p class="footer-text">Адрес: 236034, г. Калининград, ул. Новинская, 1</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} Все права защищены</p>
      </div>
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
  background: #2c3e50;
  color: #ecf0f1;
  padding: clamp(2rem, 5vw, 3rem) 0 0;
}

.footer-container {
  max-width: min(1200px, 90%);
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  color: #27ae60;
  font-size: clamp(1.1rem, 1.3vw, 1.25rem);
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #27ae60;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-contact-item {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.contact-label {
  color: #95a5a6;
}

.contact-link {
  font-weight: 500;
}

.footer-legal {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-text {
  margin: 0;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  line-height: 1.5;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: clamp(1rem, 2vw, 1.5rem) 0;
  text-align: center;
}

.copyright {
  margin: 0;
  color: #95a5a6;
  font-size: clamp(0.9rem, 1vw, 1rem);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-heading {
    font-size: 1.2rem;
  }
  
  .footer-link, .footer-text {
    font-size: 1rem;
  }
}
</style>