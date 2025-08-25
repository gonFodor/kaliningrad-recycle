<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-wrapper">
        <div class="logo-icon">♻️</div>
        <span class="logo-text">Калининградвторресурсы</span>
      </div>
      
      <nav class="nav" :class="{ 'nav--active': isMenuOpen }">
        <div class="nav-links">
          <a href="#materials" class="nav-link" @click="closeMenu">Сырьё</a>
          <a href="#services" class="nav-link" @click="closeMenu">Услуги</a>
          <a href="#about" class="nav-link" @click="closeMenu">О компании</a>
        </div>
        <a href="tel:+74012686002" class="nav-contact">+7 (4012) 68-60-02</a>
      </nav>
      
      <button class="burger" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Меню">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped>
/* Базовые стили - ОБНОВЛЕНО И ИСПРАВЛЕНО */
.header {
  background: var(--color-bg-section);
  box-shadow: var(--shadow-sm);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 0;
  backdrop-filter: blur(10px);
  background: rgba(249, 250, 251, 0.95);
  /* ДОБАВЛЕНО: Центрирование содержимого */
  display: flex;
  justify-content: center;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* ИЗМЕНЕНО: было max-width */
  max-width: min(1200px, 90%); /* ДОБАВЛЕНО: ограничение ширины */
  padding: 0 clamp(1rem, 3vw, 2rem);
  height: clamp(70px, 8vw, 80px);
  /* margin: 0 auto; УДАЛЕНО: теперь центрируется через .header */
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s;
}

.logo-wrapper:hover {
  transform: scale(1.02);
}

.logo-icon {
  font-size: clamp(1.8rem, 3vw, 2rem);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-weight: 700;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--color-secondary);
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.nav-links {
  display: flex;
  gap: clamp(1.25rem, 2.5vw, 2rem);
}

.nav-link {
  color: var(--color-secondary);
  font-weight: 500;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: var(--transition);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-contact {
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
  border: 2px solid transparent;
}

.nav-contact:hover {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
}

.burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  position: relative;
}

.burger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-secondary);
  margin: 5px 0;
  transition: transform 0.3s, opacity 0.3s, background 0.3s;
}

/* Мобильное меню */
@media (max-width: 992px) {
  .header {
    justify-content: space-between; /* ИЗМЕНЕНО: для мобильной версии */
    padding: 0 clamp(1rem, 3vw, 2rem);
  }
  
  .header-container {
    max-width: none; /* ИЗМЕНЕНО: для мобильной версии */
    padding: 0;
  }
  
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(249, 250, 251, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    padding: 20vh 0;
  }
  
  .nav--active {
    transform: translateX(0);
  }
  
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .nav-link {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }
  
  .nav-link::after {
    height: 3px;
  }
  
  .nav-contact {
    font-size: 1.2rem;
    padding: 0.8rem 1.8rem;
  }
  
  .burger {
    display: block;
  }
  
  .burger[aria-expanded="true"] .burger-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
    background: var(--color-secondary);
  }
  
  .burger[aria-expanded="true"] .burger-line:nth-child(2) {
    opacity: 0;
  }
  
  .burger[aria-expanded="true"] .burger-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
    background: var(--color-secondary);
  }
  
  .burger[aria-expanded="true"] {
    position: fixed;
    right: clamp(1rem, 3vw, 2rem);
  }
}

/* Для очень узких экранов */
@media (max-width: 480px) {
  .logo-text {
    font-size: 0.9rem;
  }
  
  .nav-link {
    font-size: 1.1rem;
  }
  
  .nav-contact {
    font-size: 1rem;
  }
  
  .logo-icon {
    width: 35px;
    height: 35px;
    font-size: 1.5rem;
  }
}
</style>