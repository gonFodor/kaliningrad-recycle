<template>
  <header class="header">
    <div class="container">
      <div class="icon">{{ '♻️' }}</div>
      <nav class="nav">
        <a href="#services">Услуги</a>
        <a href="#waste">Отходы</a>
        <a href="#about">О компании</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <div class="contacts">
        <a href="tel:+79999999999">+7 (999) 999-99-99</a>
      </div>
      <button class="burger" @click="toggleMenu">☰</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    toggleMenu() {
      // Логика открытия/закрытия мобильного меню
    }
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}
.btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
.burger {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}
@media (max-width: 768px) {
  .nav, .contacts {
    display: none;
  }
  .burger {
    display: block;
  }
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>