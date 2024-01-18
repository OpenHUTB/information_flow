<template>
  <div class="container">
    <div class="logo"></div>
    <div class="left-background"></div>

    <div class="login-content">
      <div class="title">
        <h1 style="color: #333333">{{ data.type == 1 ? 'LOGIN' : 'REGISTER' }}</h1>
        <h1 style="color: #6497F6">PPT定制服务平台</h1>
      </div>
      <el-form :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.username" class="input" placeholder="请输入账号" size="large" :prefix-icon="User" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" class="input" placeholder="请输入密码" size="large" type="password" show-password :prefix-icon="Lock"/>
        </el-form-item>
        <el-form-item v-if="data.type == 2">
          <el-input v-model="loginForm.password_comform" class="input" placeholder="再次输入密码" size="large" type="password" show-password :prefix-icon="Lock"/>
        </el-form-item>
        <el-button class="login-btn" color="#6497F6">
          {{ data.type == 1 ? '登 录' : '注 册' }}
        </el-button>
      </el-form>
      <div class="more">
        <span class="more-btn" @click="changeType">
          {{ data.type == 1 ? '注册账号' : '返回登录' }}
        </span>
        <span class="more-btn">管理员登录</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { User, Lock } from '@element-plus/icons-vue'

  const data = reactive({
    type: 1, // 1:登录 2:注册
  })
  const loginForm = reactive({
    username: '',
    password: '',
    password_comform: '',
  })

  const changeType = () => {
    data.type = data.type == 1 ? 2 : 1;
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  width: var(--window-width);
  .logo {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 32px;
    width: 110px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(@/assets/image/logo/logo.png);
  }
  .left-background {
    width: 739px;
    height: var(--window-height);
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('@/assets/image/background/login_background.png');
  }
  .login-content {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-right: 140px;
    margin-top: -80px;
    .title {
      margin-bottom: 16px;
    }
    .input {
      margin: 6px auto;
    }
    .login-btn {
      width: 500px;
      margin: 8px auto;
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
    :deep(.el-input--large .el-input__wrapper) {
      width: 500px;
      padding: 4px 8px;
    }
    :deep(.el-button) {
      height: 40px;
      color: #FFFFFF;
      font-weight: 600;
    }
  }
}
</style>