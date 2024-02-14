<template>
  <div class="container">
    <div class="logo h-10 w-32"></div>
    <div class="left-background"></div>

    <div class="login-content">
      <div class="title">
        <h1 style="color: #333333">{{ data.type == 1 ? 'LOGIN' : 'REGISTER' }}</h1>
        <h1 style="color: #6497F6">PPT定制服务平台</h1>
      </div>
      <el-form 
        ref="ruleFormRef"
        :model="loginForm"
        :rules="rules"
      >
        <el-form-item prop="account">
          <el-input v-model="loginForm.account" class="input" placeholder="请输入账号" size="large" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" class="input" placeholder="请输入密码" size="large" type="password" show-password :prefix-icon="Lock"/>
        </el-form-item>
        <el-form-item prop="password_comform" v-if="data.type == 2">
          <el-input v-model="loginForm.password_comform" class="input" placeholder="再次输入密码" size="large" type="password" show-password :prefix-icon="Lock"/>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" color="#6497F6" @click="handleSubmit(ruleFormRef)">
            {{ data.type == 1 ? '登 录' : '注 册' }}
          </el-button>
        </el-form-item>
      </el-form>
      <div class="more">
        <span class="more-btn" @click="changeType(ruleFormRef)">
          {{ data.type == 1 ? '注册账号' : '返回登录' }}
        </span>
        <span class="more-btn">管理员登录</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { ElMessage } from 'element-plus'
  import type { FormInstance, FormRules } from 'element-plus'
  import { User, Lock } from '@element-plus/icons-vue'
  import { login, register } from '@/api/login'
  import { getToken, setToken, removeToken } from '@/util/auth.ts'

  const data = reactive({
    type: 1, // 1:登录 2:注册
  })

  interface RuleForm {
    account: string
    password: string
    password_comform: string
  }
  const ruleFormRef = ref<FormInstance>()
  const loginForm = reactive<RuleForm>({
    account: '',
    password: '',
    password_comform: '',
  })

  const validatePass = (rule: any, value: any, callback: any) => {
    if (loginForm.password != loginForm.password_comform) {
      callback(new Error('两次密码输入不一致'))
    } else {
      callback()
    }
  }

  const rules = reactive<FormRules<RuleForm>>({
    account: [
      { required: true, message: '账号不能为空', trigger: 'blur' },
      { min: 11, max: 11, message: '账号长度应为11位', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
    ],
    password_comform: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { validator: validatePass, trigger: 'blur' }
    ],
  })

  const changeType = (formEl: FormInstance | undefined) => {
    // 清空表单
    if (!formEl) return
    formEl.resetFields()
    data.type = data.type == 1 ? 2 : 1;
  }

  const handleSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        if(data.type == 1) {
          handleLogin()
        } else {
          handleRegister()
        }
        console.log('submit!', loginForm)
      } else {
        console.log('error submit!', fields)
      }
    })
  }

  // 登录
  const handleLogin = async () => {
    // const { data } = await login({
    //   account: loginForm.account,
    //   password: loginForm.password,
    // })
    // if(data.status == 200) {
    //   ElMessage({
    //     message: '登录成功',
    //     type: 'success',
    //   })
    // } else {
    //   ElMessage({
    //     message: data.msg,
    //     type: 'error',
    //   })
    // }
    login({
      account: loginForm.account,
      password: loginForm.password,
    }).then(res => {
      const data = res.data
      if(data.status == 200) {
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
        setToken(data.token)
        console.log('token', getToken());
      } else {
        ElMessage({
          message: data.msg,
          type: 'error',
        })
      }
    })
  }

  // 注册
  const handleRegister = async () => {
    const { data } = await register({
      account: loginForm.account,
      password: loginForm.password,
    })
    if(data.status == 200) {
      ElMessage({
        message: '注册成功',
        type: 'success',
      })
    } else {
      ElMessage({
        message: data.msg,
        type: 'error',
      })
    }
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
      margin-top: 8px;
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