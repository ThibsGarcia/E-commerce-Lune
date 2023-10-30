<script setup lang="ts">

</script>

<template>
  <div class="container-chair">
    <div class="hero-content">
      <div class="picture">
          <img class="img-hero" src="../../assets/img/lune/Presentation/product-hero-blanc@1x.png" alt="hero">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.container-chair {
  .hero-content {
    position: fixed;
    height: 550px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .picture{
    width: 500px;
    height: 500px;
    display: flex;
    align-items: end;
    justify-content: center;
    }
    .img-hero {
      height: 80%;
      z-index: 1;
    }  
  }
}
</style>
