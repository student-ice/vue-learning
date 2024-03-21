<script setup>
import { UserFilled, Lock } from '@element-plus/icons-vue'
</script>

<template>
  <div style="height: 100%">
    <el-row style="height: 100%;background: #409EFF;">
      <el-col :lg="16" :md="12" class="col-left">
        <h1> Vue3 商城管理系统 </h1>
        <span>技术支持</span>
      </el-col>
      <el-col :lg="8" :md="12" class="col-right">
        <h1>登录</h1>
        <el-form class="login-form">
          <el-form-item>
            <el-input placeholder="请输入用户名" >
              <template #prefix>
                <el-icon>
                  <UserFilled />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" >
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.col-left {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.col-right {
  background:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .login-form {
    width: 240px;
  }
  .el-button {
    width: 240px;
  }
}
</style>