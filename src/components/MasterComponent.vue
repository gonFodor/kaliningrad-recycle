<template>
  <div id="app">
    <HeaderComponent />
    
    <main>
      <HeroSlider />
      <ServicesSection :services="services" />
      <!--<WasteTypes :wasteTypes="wasteTypes" />-->
      <AboutCompany />
      <!--<ContactForm />-->
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import HeroSlider from './HeroSlider.vue'
import ServicesSection from './ServicesSection.vue'
import WasteTypes from './WasteTypes.vue'
import AboutCompany from './AboutCompany.vue'
import ContactForm from './ContactForm.vue'
import FooterComponent from './FooterComponent.vue'

export default {
  name: 'MasterComponent',
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
        { id: 1, title: 'Гофрокартон', icon: '📦', description: 'Описание услуги...' },
        { id: 2, title: 'Архив', icon: '📂', description: 'Описание услуги...' },
        { id: 3, title: 'Газеты и журналы', icon: '📰', description: 'Описание услуги...' },
        { id: 4, title: 'Книги', icon: '📚', description: 'Описание услуги...' },
        { id: 5, title: 'Белая и цветная плёнка', icon: '📽', description: 'Описание услуги...' }
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
</style>