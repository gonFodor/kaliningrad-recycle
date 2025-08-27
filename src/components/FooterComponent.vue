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
            <div class="footer-contact-item">
              <span class="contact-label">Телефоны:</span>
              <div class="phones-container">
                <a href="tel:+79097978734" class="footer-link contact-link phone-link">
                  +7 909 797-87-34
                </a>
                <a href="tel:632337" class="footer-link contact-link phone-link">
                  63-23-37
                </a>
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="contact-label">Email:</span>
              <a href="mailto:vtorres@bk.ru" class="footer-link contact-link">vtorres@bk.ru</a>
            </div>
          </div>
        </div>

        <div class="footer-section">
          <h3 class="footer-heading">Реквизиты</h3>
          <div class="footer-legal">
            <p class="footer-text">ЗАО "Калининградвторресурсы"</p>
            <p class="footer-text">ИНН 3907000720</p>
            <p class="footer-text">ОГРН 1023901641950</p>
            <p class="footer-text">Адрес: г.Калининград, ул. Дзержинского 170а</p>
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
  background: var(--color-secondary);
  color: #ecf0f1;
  padding: clamp(2.5rem, 5vw, 3.5rem) 0 0;
  margin-top: auto;
}

.footer-container {
  max-width: min(1200px, 90%);
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: clamp(2rem, 4vw, 3rem);
  margin-bottom: clamp(2rem, 4vw, 2.5rem);
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  color: var(--color-primary);
  font-size: clamp(1.2rem, 1.5vw, 1.3rem);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  font-weight: 600;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  transition: var(--transition);
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateX(5px);
  text-decoration: none;
}

.footer-link::before {
  content: '→';
  opacity: 0;
  transition: opacity 0.3s ease;
}

.footer-link:hover::before {
  opacity: 1;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.footer-contact-item {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.contact-label {
  color: #95a5a6;
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: 500;
}

.phones-container {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.phone-link {
  padding: 0.2rem 0;
  transition: all 0.3s ease;
  display: block;
  margin-left: 1rem;
  position: relative;
}

.phone-link::before {
  content: '—';
  position: absolute;
  left: -1rem;
  color: #95a5a6;
}

.phone-link:hover {
  color: #ffffff;
  transform: translateX(3px);
}

.contact-link {
  font-weight: 500;
  color: #bdc3c7;
  transition: var(--transition);
}

.contact-link:hover {
  color: #ffffff;
}

.footer-legal {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.footer-text {
  margin: 0;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  line-height: 1.6;
  color: #bdc3c7;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: clamp(1.25rem, 2.5vw, 1.75rem) 0;
  text-align: center;
}

.copyright {
  margin: 0;
  color: #95a5a6;
  font-size: clamp(0.9rem, 1vw, 1rem);
}

/* Адаптивность */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-links {
    align-items: center;
  }
  
  .footer-contact-item {
    align-items: center;
  }
  
  .phones-container {
    align-items: center;
  }
  
  .phone-link {
    margin-left: 0;
  }
  
  .phone-link::before {
    display: none;
  }
  
  .footer-legal {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 0 0;
  }
  
  .footer-heading {
    font-size: 1.2rem;
  }
  
  .footer-link, .footer-text {
    font-size: 1rem;
  }
  
  .contact-label {
    font-size: 0.9rem;
  }
  
  .phones-container {
    gap: 0.3rem;
  }
  
  .phone-link {
    font-size: 0.95rem;
  }
}
</style>