<template>
  <div id="app">
    <HeaderComponent />
    
    <main>
      <HeroSlider />
      <ServicesSection :services="services" />
      <!--<WasteTypes :wasteTypes="wasteTypes" />-->
      <AboutCompany />
      <ContactForm />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HeroSlider from './components/HeroSlider.vue'
import ServicesSection from './components/ServicesSection.vue'
import WasteTypes from './components/WasteTypes.vue'
import AboutCompany from './components/AboutCompany.vue'
import ContactForm from './components/ContactForm.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSlider,
    ServicesSection,
    WasteTypes,
    AboutCompany,
    ContactForm,
    FooterComponent
  },
  data() {
    return {
      services: [
        { id: 1, title: 'Вывоз мусора', icon: '🚛', description: 'Описание услуги...' },
        { id: 2, title: 'Утилизация', icon: '♻️', description: 'Описание услуги...' },
        { id: 3, title: 'Утилизация', icon: '🍃', description: 'Описание услуги...' },
        { id: 4, title: 'Утилизация', icon: '🌳', description: 'Описание услуги...' },
        { id: 5, title: 'Утилизация', icon: '🚜', description: 'Описание услуги...' },
        { id: 6, title: 'Утилизация', icon: '🔋', description: 'Описание услуги...' },
        { id: 7, title: 'Утилизация', icon: '🌱', description: 'Описание услуги...' },
        { id: 8, title: 'Утилизация', icon: '✅', description: 'Описание услуги...' },
        // ...другие услуги
      ],
      wasteTypes: [
        { id: 1, type: 'Макулатура', category: 'paper', icon: '📄', conditions: 'Условия приема...' },
        { id: 2, type: 'Пластик', category: 'plastic', icon: '🥤', conditions: 'Условия приема...' },
        // ...другие типы отходов
      ]
    }
  }
}
</script>

<style>
/* Глобальные стили */
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: block;
}
</style>