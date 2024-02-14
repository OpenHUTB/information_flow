<template>
    <div class="card w-[240px] h-[300px]">
        <div class="cover w-[224px] h-[126px] mt-2"></div>
        <div class="main w-[224px] h-[160px]">
            <div class="title mt-2 mb-2">扁平风年终总结报告</div>
            <div class="describe mb-4">UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able the horse.</div>
            <div class="designer">
                <div class="avadar w-8 h-8 mr-2"></div>
                <div class="name">Ralph Edwards</div>
            </div>
            <span class="more cursor-pointer mt-2">
                了解更多
                <i class="iconfont icon-arrow"></i>
            </span>
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
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid $lightColor;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        padding: 4px;
        .cover {
            background-color: #eee;
            border-radius: 8px;
        }
        .main {
            // background-color: $hoverColor;
            .title {
                font-size: 18px;
                font-weight: 600;
            }
            .describe {
                font-size: 12px;
                width: 224px;
                height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 20px;
            }
            .designer {
                display: flex;
                align-items: center;
                .avadar {
                    background-color: #eee;
                    border-radius: 32px;
                }
                .name {
                    font-size: 14px;
                    font-weight: 600;
                }
            }
            .more {
                color: $mainColor;
                font-size: 12px;
                float: right;
                i {
                    font-size: 12px;
                }
            }
        }
    }
</style>