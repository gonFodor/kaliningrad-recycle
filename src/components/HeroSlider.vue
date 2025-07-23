<template>
  <section class="hero">
    <div class="slider">      
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentSlide === index }">
        <img :src="slide.image" :title="slide.title" style="border-radius: 8px;">
        <div class="content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
          <button class="btn">Узнать больше</button>
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

export default {
  name: 'HeroSlider',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { 
          image: '/src/assets/files/DSC_02391.jpg',
          title: 'Заголовок слайда 1',
          description: 'Описание слайда 1'
        },
        { 
          image: '/src/assets/files/DSCN4573.jpg',
          title: 'Заголовок слайда 1',
          description: 'Описание слайда 1'
        },
        { 
          image: '/src/assets/files/DSCN4578.jpg',
          title: 'Заголовок слайда 1',
          description: 'Описание слайда 1'
        },
        { 
          image: '/src/assets/files/DSCN4600.jpg',
          title: 'Заголовок слайда 1',
          description: 'Описание слайда 1'
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
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