import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserInfoFn } from "@/api/login.js";

export const useUserStore = defineStore("useUserStore", () => {
  const userInfo = ref({});
  const menus = ref([])

  const getUserInfo = () => {
    return new Promise((resolve, reject) => {
      getUserInfoFn().then((res) => {
        userInfo.value = res.data
        console.log("用户信息: " , res.data)
        menus.value = res.data.menus
        resolve(res.data);
      }).catch(err => reject(err));
    });
  };

  return {
    userInfo,
    menus,
    getUserInfo
  };
});