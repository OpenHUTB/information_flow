<template>
    <div class="card w-[320px] h-[110px] cursor-pointer">
        <div class="avatar w-[64px] h-[64px] ml-4">
            <img class="w-[60px] h-[60px]" src="@/assets/avatar/Rectangle-1.png"></img>
        </div>
        <div class="main w-[220px] h-[74px]">
            <div class="name mb-2">Ralph Edwards</div>
            <div class="abstract">Hi, I've been calling you and your phone doesn't ring, what's...</div>
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';
    .card {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $backMain;
        border-radius: 16px;
        border: 1px solid $lightColor;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        .avatar {
            display: flex;
            justify-content: center;
            align-items: center;    
            border-radius: 34px;
            // background-color: $mainColor;
            border: 2px solid $mainColor;
            img {
                border-radius: 30px;
            }
        }
        .main {
            // background-color: $hoverColor;
            .name {
                font-weight: 600;
            }
            .abstract {
                font-size: 12px;
            }
        }
    }
</style>