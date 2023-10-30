<script setup lang="ts">
</script>

<template>
  <div class="header-container">
    <div class="content-header">
      <div class="menu-header">
        <img src="../../assets/img/lune/Share/menu.png" alt="">
      </div>
      <div class="title-header">
        <h2>LUNE</h2>
      </div>
      <div class="mail-header">
        <router-link to="/WhiteChairs">
          <button class="btn-2">Switch to white</button>
        </router-link>      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';

.header-container {
    height: 100px;
    margin: auto;
    color: white;
    .content-header {
      position: fixed;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      background-color: #202125;
      z-index: 999;
      .menu-header, .mail-header {
        width: 25%;
        display: flex;
        justify-content: center;
        font-size: 12px;
        letter-spacing: 3.12px;
        line-height: 36px;
       img {
        width: 30px;
       }
      }
      .title-header {
       width: 50%;
       display: flex;
       justify-content: center;
       h2 {
        height: 22px;
        letter-spacing: 10.56px;
        line-height: 22px;
       }
      }
    }
}

</style>
