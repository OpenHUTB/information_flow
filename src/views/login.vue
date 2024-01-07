<template>
  <div class="container">
    <div class="login-content">
      <div class="logo">
        <!-- <img src="@/assets/image/logo/logo.png" /> -->
      </div>
      <el-input v-model="username" class="input username" placeholder="输入账号" size="large" />
      <el-input v-model="password" class="input password" type="password" placeholder="输入密码" show-password size="large" />
      <el-button class="login-btn" color="#39CCC5" plain>登录</el-button>
      <div class="more">
        <span class="more-btn">注册账号</span>
        <span class="more-btn">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const username = ref('')
  const password = ref('')

</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.container {
  position: relative;
  height: 100vh;
  .login-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: calc(50% - 250px);
    top: 80px;
    .logo {
      // display: flex;
      // justify-content: center;
      height: 60px;
      width: 240px;
      margin: auto;
      margin-bottom: 24px;
      background: url(@/assets/image/logo/logo.png) no-repeat;
      background-size: 80%;
      // img {
      //   width: 180px;
      // }
    }
    .input {
      width: 500px;
      margin: 12px auto;
    }
    .login-btn {
      display: block;
      width: 500px;
      margin: 12px auto;
    }
    .more {
      display: flex;
      justify-content: space-between;
      color: $mainColor;
      .more-btn:hover {
        cursor: pointer;
        color: $hoverColor;
      }
    }
    ::v-deep .el-input--large .el-input__wrapper {
      width: 500px;
    }
  }
}
</style>