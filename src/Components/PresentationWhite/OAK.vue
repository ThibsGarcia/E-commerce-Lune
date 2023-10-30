<script setup lang="ts">
</script>

<template>
        <div class="oak-container">
            <div class="first-aok-content">
                <div class="title-first">
                    <h4>OAK</h4>
                </div>
                <div class="wood-content">
                    <div class="wood-picture"></div>
                </div>
                <div class="chair-content">
                    <div class="chair1-picture"></div>
                </div>
            </div>
            <div class="second-oak-content">
                <div class="title-second-oak">
                    <h4>POLYPR -</h4>
                    <h4>- OPELENE</h4>
                </div>
                <div class="picture-second-oak">
                    <div class="picture-img"></div>
                </div>
                <div class="title-second-oak">
                    <h3>BLANC</h3>
                </div>
                <div class="btn-oak">
                    <button class="btn-1">Visit Us</button>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss';
.oak-container {
    height: 3000px;
    .first-aok-content {
        height: 1300px;
        .title-first {
            height: 100px;
            font-size: 110px;
            letter-spacing: 61.6px;
            line-height: 110px;
            display: flex;
            align-items: center;
            justify-content: center;
            h4 {
                z-index: 1;
            }
        }
        .wood-content {
            height: 600px;
            margin-top: -10%;
            margin-left: 52%;
            position: relative;
            .wood-picture {
                background-image: url(../../assets/img/lune/Presentation/wood-picture.jpg);
                background-size: cover;
                background-repeat: no-repeat;
                height: 560px;
                width: 480px;
                z-index: 1;
            }
        }
        .chair-content {
            height: 800px;
            margin-top: -15%;
            margin-left: 12%;
            position: relative;
            .chair1-picture {
                background-image: url(../../assets/img/lune/Presentation/presentation1.jpg);
                background-size: contain;
                background-repeat: no-repeat;
                height: 759px;
                width: 480px;
                z-index: 1;
            }
        }
    }
    .title-second-oak {
        display: flex;
        flex-direction: column;
        align-items: center;
        h4 {
            font-size: 90px;
            letter-spacing: 40.5px;
            line-height: 165px;
            z-index: 1;
        }
        h3 {
            font-size: 180px;
            letter-spacing: 80px;
            padding-left: 5%;
            line-height: 270px;
        }
    }
    
    .picture-second-oak {
        height: 719px;
        width: 516px;
        margin-left: 50%;
        margin-bottom: 100px;
        position: relative;
        .picture-img {
        background-image: url(../../assets/img/lune/Presentation/presentation2white.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        z-index: 1;
        }
    }
    .btn-oak {
        height: 350px;
        display: flex;
        align-items: end;
        justify-content: center;
    }
}

</style>
