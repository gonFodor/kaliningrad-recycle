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
/* CSS Variables for theming */
:root {
  --color-primary: #27ae60;
  --color-primary-dark: #219653;
  --color-secondary: #2c3e50;
  --color-text: #09121b;
  --color-text-light: #6c757d;
  --color-bg: #ffffff;
  --color-bg-light: #f8f9fa;
  --color-border: #e9ecef;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
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
  line-height: 1.5;
  overflow-x: hidden;
}

#app {
  /* System font stack with fallbacks */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
               Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  background-color: var(--color-bg-light);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Typography */
h1, h2, h3, h4 {
  line-height: 1.2;
  margin-bottom: 0.75em;
}

p {
  margin-bottom: 1rem;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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

/* Feature queries for progressive enhancement */
@supports (display: grid) {
  .js-enabled .grid-container {
    display: grid;
  }
}
</style>