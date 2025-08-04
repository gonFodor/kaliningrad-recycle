<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-wrapper">
        <div class="logo-icon">♻️</div>
        <span class="logo-text">Калининградвторресурсы</span>
      </div>
      
      <nav class="nav" :class="{ 'nav--active': isMenuOpen }">
        <div class="nav-links">
          <a href="#services" class="nav-link" @click="closeMenu">Услуги</a>
          <a href="#about" class="nav-link" @click="closeMenu">О компании</a>
        </div>
        <a href="tel:+74012632337" class="nav-contact">+7 (401) 263-23-37</a>
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
/* Базовые стили */
.header {
  background: #ffffff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: min(1200px, 90%);
  padding: 0 clamp(1rem, 3vw, 2rem);
  height: clamp(60px, 8vw, 70px);
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
  font-size: clamp(1.5rem, 3vw, 1.8rem);
}

.logo-text {
  font-weight: 700;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #2c3e50;
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.nav-links {
  display: flex;
  gap: clamp(1rem, 2vw, 1.5rem);
}

.nav-link {
  color: #2c3e50;
  font-weight: 600;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s;
  white-space: nowrap;
}

.nav-link:hover {
  color: #27ae60;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #27ae60;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-contact {
  background: #27ae60;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  text-decoration: none;
  transition: all 0.3s;
  white-space: nowrap;
}

.nav-contact:hover {
  background: #219653;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(39, 174, 96, 0.25);
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
  background: #2c3e50;
  margin: 5px 0;
  transition: transform 0.3s, opacity 0.3s, background 0.3s;
}

/* Мобильное меню */
@media (max-width: 992px) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(5px);
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
    background: #2c3e50;
  }
  
  .burger[aria-expanded="true"] .burger-line:nth-child(2) {
    opacity: 0;
  }
  
  .burger[aria-expanded="true"] .burger-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
    background: #2c3e50;
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
}
</style>