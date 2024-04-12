<script setup>
import { useUserStore } from "@/store/index.js";
import { ArrowDown, Fold, FullScreen, Refresh } from "@element-plus/icons-vue";
import { useFullscreen} from "@vueuse/core";

const { toggle, isFullscreen } = useFullscreen()
const userStore = useUserStore();

const refresh = () => {
  location.reload()
}
</script>

<template>
  <div class="header">
  <span class="logo">
    商城后台管理系统
  </span>
    <el-icon class="icon">
      <Fold />
    </el-icon>
    <div class="f_right">
      <el-tooltip effect="dark" placement="bottom" content="刷新">
        <el-icon class="icon">
          <Refresh @click="refresh" />
        </el-icon>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom" :content="isFullscreen ? '退出全屏' : '全屏'">
        <el-icon class="icon">
          <FullScreen @click="toggle" />
        </el-icon>
      </el-tooltip>
      <el-dropdown>
      <span>
        <el-avatar :size="30" :src="userStore.userInfo.avatar" />
        {{ userStore.userInfo.username }}
        <el-icon class="el-icon--right" style="margin-left: 10px">
          <arrow-down />
        </el-icon>
      </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  color: #fff;
  align-items: center;

  .f_right {
    margin-left: auto;
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 20px;

    .el-dropdown {
      margin-left: 20px;
      color: #fff;
      cursor: pointer;

      span {
        display: flex;
        align-items: center;

        .el-avatar {
          margin-right: 10px;
        }
      }
    }
  }

  .logo {
    font-size: 18px;
    padding-right: 16px;
  }

  .icon {
    width: 30px;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  }

  .icon:hover {
    background-color: #065327;
  }

}
</style>