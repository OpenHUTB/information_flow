<template>
  <div class="recommend">
    <div class="search w-80% h-36">
      <div class="w-[600px]">
        <div class="slogen mb-4">专业PPT定制服务 个性化呈现 创意无限</div>
        <el-input v-model="keyword" class="h-10" placeholder="搜索关键词">
          <template #prefix>
            <el-icon class="el-input__icon"><Search /></el-icon>
          </template>
          <template #suffix>
            <el-button type="primary">搜索</el-button>
          </template>
        </el-input>
      </div>
    </div>

    <div class="mb-8">
      <div class="head mt-4 mb-4">
        <span class="title">分类筛选</span>
        <span class="more cursor-pointer">
          查看全部
          <i class="iconfont icon-arrow"></i>
        </span>
      </div>
      <div class="mould-card">
        <MouldCard v-for="item in mouldData" :title="item.title" :describe="item.describe" :icon="item.icon" />
      </div>
    </div>

    <div class="mb-8">
      <div class="head mt-4 mb-4">
        <span class="title">设计师推荐</span>
        <span class="more cursor-pointer">
          查看全部
          <i class="iconfont icon-arrow"></i>
        </span>
      </div>
      <div class="designer-card">
        <DesignerCard class="mr-2 mb-4" v-for="item in 8" />
      </div>
    </div>

    <div class="mb-8">
      <div class="head mt-4 mb-4">
        <span class="title">定制案例</span>
      </div>
      <div class="recommend-card">
        <RecommendCard class="mr-2 mb-4" v-for="item in 5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import MouldCard from '@/components/Recommend/MouldCard.vue'
  import DesignerCard from '@/components/Recommend/DesignerCard.vue'
  import RecommendCard from '@/components/Recommend/RecommendCard.vue'
  
  const getImg = (name) => {
    return `/src/assets/image/reccomend/${name}.png`
  }

  let keyword = ref('')
  let mouldData = reactive([
    { title: '企业介绍', describe: '好PPT，讲出好故事', icon: getImg('L-Chat Bubbles') },
    { title: '产品发布', describe: '一夜间，让产品家喻户晓', icon: getImg('L-Code') },
    { title: '培训课件', describe: '给培训配上电影级的PPT', icon: getImg('L-Newspaper') },
    { title: '招商推介', describe: '打造城市形象新名片', icon: getImg('F-Building') },
    { title: '总结汇报', describe: '我们做的比领导想的好', icon: getImg('F-Goal') },
  ])
  
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.recommend {
  height: 200px;
  .search {
    background-image: url(@/assets/image/background/banner.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    .slogen {
      color: #ffffff;
      text-align: center;
    }
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 18px;
      font-weight: 600;
      color: $black;
    }
    .more {
      color: $mainColor;
    }
  }
  .mould-card {
    display: flex;
    justify-content: space-between;
  }
  .designer-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .recommend-card {
    display: flex;
    justify-content: space-between;
  }
}
</style>