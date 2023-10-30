<script setup lang="ts">
import HeroPicture from './HeroPicture.vue';
import ChairsText from './ChairsText.vue';
import ChairsSize from './ChairsSize.vue';
import HeroTexte from './HeroTexte.vue';
import Oak from './OAK.vue';

import HeaderBlack from '../Features/HeaderBlack.vue';
</script>

<template>
  
  <section>
    <HeaderBlack/>
    <HeroPicture class="bg-1"/>
    <HeroTexte class="bg-2"/>
    <ChairsText class="bg-3"/>
    <ChairsSize class="bg-4"/>
    <Oak class="bg-5"/>
  </section>

</template>

<style scoped lang="scss">
@use '@/assets/base.scss';

section {
  background-color: #202125;
  color: white;
}
</style>
