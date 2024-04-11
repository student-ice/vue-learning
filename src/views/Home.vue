<script setup>
import { ElMessageBox } from "element-plus";
import { onBeforeMount } from "vue";
import { useUserStore } from "@/store/index.js";
import { useRoute, useRouter } from "vue-router";

const router = useRouter()
const userStore = useUserStore()

onBeforeMount(async () => {
});

const logout = async () => {
  const res = await ElMessageBox.confirm(
    "是否退出登录",
    "注意",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }
  ).catch(err => {
    return err
  })
  console.log(res);

  if(res === "confirm") {
    // 用户单击了确定按钮
    // 删除token
    window.sessionStorage.removeItem("token")
    // 删除store 中的用户信息
    userStore.setUserInfo({})
    router.push("/login")
  }
}
</script>

<template>
  <h1>首页</h1>
  <el-button @click="logout">退出登录</el-button>
</template>

<style scoped>

</style>