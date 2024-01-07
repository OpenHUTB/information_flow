<script setup lang="ts">
import { RouterView } from 'vue-router'
import Head from '@/components/Layout/Head.vue'
import Menu from '@/components/Layout/Menu.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside>
          <Menu></Menu>
        </el-aside>
        <el-container>
          <el-main>
            <RouterView></RouterView>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>

</style>