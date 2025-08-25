<template>
  <div id="app">
    
      <HeaderComponent />
    
    <main>
      
      <HeroSlider />
      <StatsSection /> 
      <RecyclingSteps />
      <MaterialsSection :services="services" />
      <ServicesSection /> <!-- Добавляем секцию услуг -->
      <AboutCompany />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import HeroSlider from './HeroSlider.vue';
import MaterialsSection from './MaterialsSection .vue';
import WasteTypes from './WasteTypes.vue';
import AboutCompany from './AboutCompany.vue';
import ContactForm from './ContactForm.vue';
import FooterComponent from './FooterComponent.vue';
import StatsSection from './StatsSection.vue'; 
import RecyclingSteps from './RecyclingSteps.vue';
import ServicesSection from './ServicesSection.vue';


export default {
  name: 'MasterComponent',
  components: {
    HeaderComponent,
    HeroSlider,
    MaterialsSection,
    WasteTypes,
    AboutCompany,
    ContactForm,
    FooterComponent,
    StatsSection,
    RecyclingSteps,
    ServicesSection
  },
  data() {
    return {
      services: [
        { id: 1, title: 'Гофрокартон', icon: '📦', description: 'Описание услуги...' },
        { id: 2, title: 'Архив', icon: '📂', description: 'Описание услуги...' },
        { id: 3, title: 'Газеты и журналы', icon: '📰', description: 'Описание услуги...' },
        { id: 4, title: 'Книги', icon: '📚', description: 'Описание услуги...' },
        { id: 5, title: 'Белая и цветная плёнка', icon: '📽', description: 'Описание услуги...' },
        { id: 6, title: 'Полиэтилен', icon: '🛍️', description: 'Описание услуги...' }
      ]
    }
  }
}
</script>

<style>
</style>