<template>
  <section class="hero">
    <!-- Контейнер для слайдов -->
    <div class="slider-container">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentSlide === index }">
        <div class="slide-image-container">
          <img :src="slide.image" :alt="slide.title" class="slide-image">
          <div class="image-overlay"></div>
        </div>
        <div class="slide-content">
          <div class="content-wrapper">
            <h1 class="slide-title">{{ slide.title }}</h1>
            <p class="slide-description">{{ slide.description }}</p>
            <!--<div class="hero-cta">
              <a href="#contacts" class="btn btn-primary">Получить консультацию</a>
              <a href="#services" class="btn btn-outline">Наши услуги</a>
            </div>-->
          </div>
        </div>
      </div>
    </div>

    <!-- Кнопки навигации -->
    <button class="slider-nav slider-nav--prev" @click="prevSlide" aria-label="Предыдущий слайд">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="slider-nav slider-nav--next" @click="nextSlide" aria-label="Следующий слайд">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Индикаторы (точки) -->
    <div class="slider-dots">
      <button v-for="(dot, index) in slides" :key="index" class="slider-dot" :class="{ active: currentSlide === index }" @click="goToSlide(index)" :aria-label="'Перейти к слайду ' + (index + 1)">
        <span class="sr-only">Слайд {{ index + 1 }}</span>
      </button>
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
      slideInterval: null,
      slides: [
        {
          image: image1,
          title: 'Экологичная переработка — шаг к чистому будущему!',
          description: 'Комплексные услуги по вывозу и переработке отходов в Калининграде. Работаем с 1946 года.'
        },
        {
          image: image2,
          title: 'Профессиональная утилизация для бизнеса',
          description: 'Предоставляем полный пакет документов для отчётности и снижения экологического сбора.'
        },
        {
          image: image3,
          title: 'Покупаем вторичное сырьё',
          description: 'Гофрокартон, макулатура, плёнка, пластик. Бесплатный вывоз нашим транспортом.'
        },
        {
          image: image4,
          title: 'Чистый город начинается с правильной утилизации',
          description: 'Современное оборудование и собственный автопарк для эффективной работы.'
        },
      ]
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 6000);
    },
    stopAutoPlay() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  z-index: 1;
}

.slide.active {
  opacity: 1;
  z-index: 2;
}

.slide-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(80deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.2) 100%);
}

.slide-content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
}

.content-wrapper {
  max-width: min(800px, 90%);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.6); /* Полупрозрачный темный фон */
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.slide-title {
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.slide-description {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background-color: transparent;
  color: white;
  border-color: white;
}

.btn-outline:hover {
  background-color: white;
  color: var(--color-secondary);
  transform: translateY(-2px);
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-nav:hover {
  background: rgba(255, 255, 255, 0.25);
}

.slider-nav--prev {
  left: 2rem;
}

.slider-nav--next {
  right: 2rem;
}

.slider-dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 0.75rem;
}

.slider-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.slider-dot.active {
  background: white;
  transform: scale(1.2);
}

.slider-dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero {
    max-height: 600px;
  }

  .content-wrapper {
    padding: 1.5rem;
    max-width: 95%;
  }

  .hero-cta {
    justify-content: center;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .slider-nav {
    width: 40px;
    height: 40px;
  }

  .slider-nav--prev {
    left: 1rem;
  }

  .slider-nav--next {
    right: 1rem;
  }

  .slider-dots {
    bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .slide-title {
    margin-bottom: 1rem;
  }

  .slide-description {
    margin-bottom: 2rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }
}

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
</style>