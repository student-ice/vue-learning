<script setup>

import { useUserStore } from "@/store/index.js";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute()
const userStore = useUserStore()

const menus =  userStore.menus

const defaultActive = ref(route.path)

</script>

<template>
<el-menu active-text-color="#409EFF" background-color="#32363f" text-color="#fff" unique-opened :collapse-transition="false" Router :default-active="defaultActive">
  <el-sub-menu :index="item.id + ''" v-for="item in menus" :key="item.id">
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
    </template>
    <el-menu-item :index="subItem.frontpath" v-for="subItem in item.child" :key="subItem.id">
      <template #title>
        <el-icon>
          <component :is="subItem.icon"></component>
        </el-icon>
        <span>{{ subItem.name }}</span>
      </template>
    </el-menu-item>
  </el-sub-menu>
</el-menu>
</template>

<style scoped>

</style>