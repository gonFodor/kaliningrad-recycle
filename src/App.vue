<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    // Добавляем класс для проверки поддержки современных возможностей
    document.documentElement.classList.add('js-enabled');
    
    // Удаляем preload-стили после загрузки
    const removePreloadStyles = () => {
      const preloadStyles = document.querySelectorAll('style[type="preload"]');
      preloadStyles.forEach(style => style.remove());
    };
    window.addEventListener('load', removePreloadStyles);
  }
}
</script>

<style>
/* CSS Variables for theming - UPDATED COLOR SCHEME */
:root {
  --color-primary: #27ae60; /* Сохраняем зеленый для акцентов */
  --color-primary-dark: #219653;
  --color-secondary: #2c3e50; /* Сохраняем темный для текста */
  --color-text: #09121b;
  --color-text-light: #5f6c76;
  --color-bg: #F9FAFB; /* Светло-серый вместо чисто белого (#FFF) */
  --color-bg-section: #FFFFFF; /* Белый для секций на сером фоне */
  --color-bg-light: #EFF2F5; /* Еще один оттенок серого для деталей */
  --color-border: #e1e5e9;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --transition: all 0.3s ease;
}

/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.6; /* Увеличим межстрочный интервал для читаемости */
  overflow-x: hidden;
  background-color: var(--color-bg); /* Применяем новый фон */
  color: var(--color-text);
}

#app {
  font-family: 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* УБРАТЬ max-width и margin если есть */
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  /* padding: 2rem; */
}

/* Typography */
h1, h2, h3, h4 {
  line-height: 1.3;
  margin-bottom: 0.75em;
  font-weight: 600;
  color: var(--color-secondary);
}

p {
  margin-bottom: 1.2rem; /* Немного увеличим отступ */
  color: var(--color-text-light);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

/* Utility classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.container {
  width: 100%;
  max-width: min(1200px, 92%); /* Используем min() для адаптивности */
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem); /* Адаптивные отступы */
}

/* Animation for route transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Print styles */
@media print {
  body {
    background: none;
    color: black;
    font-size: 12pt;
  }
  
  a::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    font-weight: normal;
  }
}

/* Базовые стили для изображений */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Ссылки */
a {
  text-decoration: none;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

a:hover {
  color: var(--color-primary-dark);
}

/* Утилиты */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Убедимся, что Vue Router transitions работают */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>