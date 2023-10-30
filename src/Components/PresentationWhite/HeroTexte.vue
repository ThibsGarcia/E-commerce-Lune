<script setup lang="ts">

</script>

<template>
  <div class="container-heroText">
    <div class="hero-content">
        <div class="left-hero">
            <p>O</p>
            <p>V</p>
            <p>E</p>
            <p>R</p>
            <p>V</p>
            <p>I</p>
            <p>E</p>
            <p>W</p>
        </div>
        <div class="center-hero">
            <h3>Blanc</h3>
        </div>
        <div class="right-hero">
            <div class="top-right">1</div>
            <div class="center-right"></div>
            <div class="bottom-right">4</div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.container-heroText {
    height: 550px;
    width: 100%;
    display: flex;
    justify-content: center; 
    color: black;
  .hero-content {
    display: flex;
    width: 98%;
    justify-content: space-between;
    .left-hero, .right-hero {
        display: flex;
        align-items: center;
        height: 100%;
        width: 3%;
    }
    .left-hero {
        flex-direction: column;
        justify-content: center;
    }
    .center-hero {
        font-size: 180px;
        letter-spacing: 50px;
        line-height: 270px;
        text-transform: uppercase;
    }
    .right-hero {
        justify-content: center;
        flex-direction: column;
        .center-right {
            background-color: black;
            height: 1px;
            width: 70%;
        }
    }
  }
}
</style>
