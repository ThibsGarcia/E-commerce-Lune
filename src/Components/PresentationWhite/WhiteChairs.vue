<script setup lang="ts">
import HeroPicture from './HeroPicture.vue';
import ChairsText from './ChairsText.vue';
import ChairsSize from './ChairsSize.vue';
import HeroTexte from './HeroTexte.vue';
import Oak from './OAK.vue';
import HeaderWhite from '../Features/HeaderWhite.vue';

</script>

<template>
  
  <section>
    <HeaderWhite/>
    <HeroPicture/>
    <HeroTexte/>
    <ChairsText/>
    <ChairsSize/>
    <Oak/>
  </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';

</style>
