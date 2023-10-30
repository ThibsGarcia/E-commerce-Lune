<script setup lang="ts">

</script>

<template>
  <div class="container-chair">
    <div class="text-presentation">
      <div class="left-phylo">
        <p>P</p>
        <p>H</p>
        <p>I</p>
        <p>L</p>
        <p>O</p>
        <p>S</p>
        <p>O</p>
        <p>P</p>
        <p>H</p>
        <p>Y</p>
      </div>
      <div class="content-text">
        <div class="top-content-text">
          <h3>Lune blanc</h3>
          <p>The simplicity of Lune’s form belies the attention to detail in its construction. 
            A clean silhouette unifies the chair’s armrests and curved back 
            into a single flowing line, while the wooden base provides 
            functional support and adds a textural counterpoint.</p>
        </div>
          <div class="page-chair">
            <div class="top-page-chair">2</div>
            <div class="center-page-chair"></div>
            <div class="bottom-page-chair">4</div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.container-chair {
  .text-presentation {
    z-index: 0;
    height: 718px;
    color: black;
    display: flex;
    width: 98%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content-text {
      width: 38%;
      height: 350px;
      display: flex;
      align-items: center;
      .top-content-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        width: 95%;
      }
      .page-chair {
        width: 5%;
        text-align: center;
        .center-page-chair {
          height: 1px;
          width: 100%;
          background-color: black;
        }
      }

      h3 {
        font-size: 80px;
        letter-spacing: 14px;
        line-height: 80px;
        text-transform: uppercase;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
 
</style>
