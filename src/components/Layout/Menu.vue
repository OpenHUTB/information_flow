<template>
  <el-row class="menu">
    <el-col :span="12">
      <el-menu
        :default-active="data.active"
        background-color="#ffffff"
        text-color="#333333"
        active-text-color="#39CCC5"
        class="aside-menu"
        @select="handleSelect"
      >
        <el-menu-item index="recommend">
          <el-icon><location /></el-icon>
          <span>首页推荐</span>
        </el-menu-item>
        <el-sub-menu index="progress">
          <template #title>
            <el-icon><document /></el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="progress">订单进度</el-menu-item>
            <el-menu-item index="history">历史订单</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="module">
          <el-icon><setting /></el-icon>
          <span>系统设置</span>
        </el-menu-item>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Document, Location, Setting, Flag } from '@element-plus/icons-vue'

const route = useRoute();
const router = useRouter();
const data = reactive({
  active: 'recommend'
})

onMounted(() => {
  data.active = (route.name as string) || 'default'
})

const handleSelect = (key: string, keyPath: string[]) => {
  data.active = key
  router.push(`/${key}`)
  // console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.menu, .el-col {
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  .el-menu {
    height: 100%;
    // text-color: #fff;
  }
}
.el-menu-item:hover {
  background-color: $backHover;
}
.el-sub-menu .el-sub-menu__icon-arrow {
  width: auto;
}
:deep(.el-sub-menu__title):hover {
  background-color: $backHover !important;
}
// .el-menu-item-group__title {
//   height: 0px !important;
// }
</style>