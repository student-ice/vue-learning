<script setup>
import { getUserInfo } from "@/api/login.js";
import { onBeforeMount } from "vue";
import { ElMessage } from "element-plus";

onBeforeMount(async () => {
  const res = await getUserInfo();
  console.log(res);
  if (!res.data || res.data.status !== 200) {
    return ElMessage.error("获取管理员信息失败");
  }
});
</script>

<template>
  <h1>首页</h1>
</template>

<style scoped>

</style>