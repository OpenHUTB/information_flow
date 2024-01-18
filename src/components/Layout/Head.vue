<script setup lang="ts">

</script>

<template>
  <div class="head">
    <div class="logo"></div>
    <el-dropdown trigger="click">
      <span class="avatar">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <span class="username">IngRita</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>编辑个人资料</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  .logo {
    height: 45px;
    width: 190px;
    background: url(@/assets/image/logo/logo-white.png) no-repeat;
    background-size: 80%;
  }
  .avatar {
    display: flex;
    align-items: center;
    .el-avatar {
      width: 50px;
      height: 50px;
      margin-right: 8px;
      cursor: pointer;
    }
    .username {
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>