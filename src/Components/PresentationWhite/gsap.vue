<script setup lang="ts">
import gsap from 'gsap';


let tl1 =gsap.timeline({
            scrollTrigger: {
                trigger: '.text1',
                start: 'top 95%',
                end: 'bottom 85%',
                scrub: true,
                markers: true,
            }
        })

        /*je fais venir l'emeent de 800 x horizon*/
        tl1.from ('.text1', {
            opacity: 0,
            y: 100,
            ease: 'power2.inOut',
        })

        let tl2 =gsap.timeline({
            scrollTrigger: {
                trigger: '.text2',
                start: 'top 95%',
                end: 'bottom 85%',
                scrub: true,
                markers: true,
            }
        })
        tl2.from ('.text2', {
            opacity: 0,
            y: 100,
            ease: 'power2.inOut',
        })
</script>

<template>
  <div class="hero-content">
        <div class="picture">
            <img class="img-hero" src="../../assets/img/lune/Presentation/product-hero-blanc@1x.png" alt="hero">
        </div>
    </div>
    <div class="hero-content2"></div>
    <div class="spacer">
        <div class="text1">
            <h2>Animate me</h2>
            <p>This is a simple card with a title and a description. </p>
        </div>
        <div class="text2">
            <h2>Animate me</h2>
            <p>This is a simple card with a title and a description. </p>
        </div>
    </div>
    <div class="spacer"></div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';

body {
    margin: 0;
    padding: 0;
    font-family: arial, sans-serif;
    font-size: 24px;
    color: white;
  }
  
  .spacer {
    height: 100vh;
  }
  .hero-content {
    position: fixed;
    height: 650px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .picture{
    width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-hero {
    height: 80%;
  }
  .hero-content2 {
    height: 100vh;
    width: 100vw;
  }
  .ligne {
    height: 300px;
  }
  
  .text1, .text2 {
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #9400df;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    left: 0px;
  }
  .text2 {
    left: 800px;
  }
  h2 {
    margin: 0;
    padding: 0;
  }
  
  p {
    font-size: 0.85em;
    line-height: 1.4em;
    margin-bottom: 0;
  }
  
  /*# sourceMappingURL=main.css.map */
  
</style>
