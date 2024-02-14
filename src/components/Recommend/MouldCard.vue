<template>
    <div class="card w-[240px] h-[250px] cursor-pointer">
        <div class="icon w-[150px] h-[200px]">
            <img :src="props.icon"></img>
        </div>
        <div class="main w-[200px] h-[200px]">
            <div class="text mb-8">
                <div class="title mb-4">{{ props.title }}</div>
                <div class="describe">{{ props.describe }}</div>
            </div>
            <el-button type="primary">查看案例</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['title', 'describe', 'icon'])
console.log('@props', props.icon);

// let icon = ref('@/assets/image/reccomend/F-Building.png')
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

    .card {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $backMain;
        border-radius: 8px;
        border: 1px solid $lightColor;
        box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);
        .icon {
            position: relative;
            // top: 30px;
            // left: -80px;
            // background-color: $mainColor;
            img {
                position: absolute;
                top: 24px;
                left: -62px;
            }
        }
        .main {
            // background-color: #333;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            .title {
                color: $black;
                font-size: 18px;
                font-weight: 600;
            }
            .describe {
                color: $black;
                font-size: 12px;
            }
        }
    }
</style>