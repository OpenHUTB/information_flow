<template>
  <el-row class="menu">
    <el-col :span="12">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#ffffff"
        text-color="#333333"
        active-text-color="#6497F6"
        class="aside-menu"
        @select="handleSelect"
      >
        <el-menu-item index="recommend">
          <el-icon><Guide /></el-icon>
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

        <div class="fold w-6 h-6 cursor-pointer" @click="isCollapse = !isCollapse">
          <el-icon size="18" color="#333" v-if="isCollapse"><Expand /></el-icon>
          <el-icon size="18" color="#333" v-else><Fold /></el-icon>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Document, Guide, Setting, Expand, Fold } from '@element-plus/icons-vue'

const route = useRoute();
const router = useRouter();
let activeMenu = ref('recommend')
let isCollapse = ref(true)

onMounted(() => {
  activeMenu.value = (route.name as string) || 'default'
})

const handleSelect = (key: string, keyPath: string[]) => {
  activeMenu.value = key
  router.push(`/${key}`)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.menu, .el-col {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: none;
  .el-menu {
    height: 100%;
  }
}

.fold {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 16px;
  right: 24px;
  background-color: #eee;
  border-radius: 12px;
}

.el-menu-item:hover {
  background-color: $backHover;}
.el-sub-menu .el-sub-menu__icon-arrow {
  width: auto;
}
:deep(.el-menu-item) {
  padding-left: 20px !important;
  padding-right: 40px !important;
}
:deep(.el-sub-menu__title) {
  padding-left: 20px !important;
}
:deep(.el-sub-menu__title):hover {
  background-color: $backHover !important;
}
:deep(.el-menu-item-group .el-menu-item-group__title) {
  display: none !important;
}
:deep(.el-menu-item-group .el-menu-item) {
  padding-left: 48px !important;
}
</style>