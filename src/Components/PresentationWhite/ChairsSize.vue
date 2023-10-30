<script setup lang="ts">

</script>

<template>
  <div class="container-chair">
    <div class="title-specifi">
      <p>S</p>
      <p>P</p>
      <p>E</p>
      <p>C</p>
      <p>I</p>
      <p>F</p>
      <p>I</p>
      <p>C</p>
      <p>A</p>
      <p>T</p>
      <p>I</p>
      <p>O</p>
      <p>N</p>
      <p>S</p>
    </div>
    <div class="text-presentation">
      <div class="size-text">
        <div class="box-size">
          <div class="name-box">
            <p>Height</p>
          </div>
          <div class="line"></div>
          <div class="unite-size">
            <h5>81</h5>
            <p>cm</p>
          </div>
        </div>
        <div class="box-size">
          <div class="name-box">
            <p>width</p>
          </div>
          <div class="line"></div>
          <div class="unite-size">
            <h5>45</h5>
            <p>cm</p>
          </div>
        </div>
        <div class="box-size">
          <div class="name-box">
            <p>Depth</p>
          </div>
          <div class="line"></div>
          <div class="unite-size">
            <h5>55</h5>
            <p>cm</p>
          </div>
        </div>
        <div class="box-size1">
          <div class="name-box">
            <p>Seat Height</p>
          </div>
          <div class="line"></div>
          <div class="unite-size">
            <h5>41</h5>
            <p>cm</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-nub">
      <div class="top-page">3</div>
      <div class="center-page"></div>
      <div class="bottom-page">4</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.container-chair {
  height: 718px;
  display: flex;
  color: black;
  .title-specifi, .page-nub {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 4%;
    font-size: 12px;
    letter-spacing: 1.44px;
    line-height: 21px;
    .center-page {
      width: 50%;
      height: 1px;
      background-color: black;
    }
  }
  .text-presentation {
    height: 718px;
    color: black;
    display: flex;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    .size-text {
      width: 100%;
      .box-size, .box-size1 {
        height: 68px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .line {
          height: 1px;
          background-image: linear-gradient(90deg, black 2px, transparent 1px);
          background-size: 4px 1px;
          width: 70%;
        }
        .name-box {
          width: 15%;
        }
        .unite-size {
          width: 10%;
        }
        .unite-size {
          display: flex;
          justify-content: center;
          align-items: end;
          h5 {
            font-size: 35px;
            letter-spacing: 3.5px;
            line-height: 35px;
          }
          p {
            letter-spacing: 2.2px;
            line-height: 22px;
          }
        }
        p {
            font-size: 22px;
            letter-spacing: 12.32px;
            line-height: 22px;
            text-transform: uppercase;
          }
      }
      .box-size1 {
        .name-box {
          width: 26%;
        }
        .line {
          width: 62%;
        }
      }
    }
  }
}
 
</style>
