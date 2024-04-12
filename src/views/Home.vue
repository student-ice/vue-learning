<script setup>
import { onBeforeMount } from "vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import TagMenu from "@/components/TagMenu.vue";

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
        <el-aside width="200px">
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
}

.el-aside {
  height: 100%;
}
</style>