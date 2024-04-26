<script setup>
import { onBeforeMount } from "vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import TagMenu from "@/components/TagMenu.vue";
import { useUserStore } from "@/store/index.js";

const userStore = useUserStore()

onBeforeMount(async () => {
});
</script>

<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside :width="userStore.isCollapse ? '63.2px' : '199.2px'">
          <Menu />
        </el-aside>
        <el-main>
          <TagMenu />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-header {
  background: #409EFF;
}

.el-main {
  background: #F2F4F5;
  height: 100%;
}

.el-aside {
  height: 100%;
  background: #32363f;
}
</style>