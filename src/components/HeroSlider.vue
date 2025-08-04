<template>
  <section class="hero">
    <div class="slider">

      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentSlide === index }">
        <img :src="slide.image"  :title="slide.title" style="border-radius: 8px;">
        <div class="content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
        </div>
      </div>
      <div class="dots">
        <span v-for="(dot, index) in slides" :key="index" 
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"></span>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/images/DSC_02391.jpg'
import image2 from '@/assets/images/DSCN4573.jpg'
import image3 from '@/assets/images/DSCN4578.jpg'
import image4 from '@/assets/images/DSCN4600.jpg'


export default {
  name: 'HeroSlider',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { 
          image: image1,
          title: 'Экологичная переработка — шаг к чистому будущему!',
          description: 'Наша передовая технология переработки отходов превращает мусор в ценные ресурсы. Доверьте нам ваши отходы, и вместе мы сделаем планету чище!'
        },
        { 
          image: image2,
          title: 'Профессиональная утилизация — забота о природе и вашем комфорте',
          description: 'Мы предлагаем быструю и безопасную утилизацию отходов любого типа. С нами вы экономите время и вносите вклад в сохранение окружающей среды.'
        },
        { 
          image: image3,
          title: 'Инновационные решения для переработки вторсырья',
          description: 'Наши современные методы переработки позволяют максимально эффективно использовать вторсырье. Присоединяйтесь к нам и станьте частью экодвижения!'
        },
        { 
          image: image4,
          title: 'Чистый город начинается с правильной утилизации',
          description: 'Мы помогаем предприятиям и частным клиентам избавляться от отходов без вреда для природы. Выбирайте надежного партнера в сфере переработки!'
        },
        
        // ...другие слайды
      ]
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  methods: {
    startAutoPlay() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 500px;
  overflow: hidden;
}
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s;
}
.slide.active {
  opacity: 1;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  background-color: rgba(3, 0, 0, 0.532);
  padding: 10px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
}
.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
}
.dots span.active {
  background: white;
}
</style>