import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserInfoFn } from "@/api/login.js";

export const useUserStore = defineStore("useUserStore", () => {
  const userInfo = ref({});
  const setUserInfo = (info) => {
    userInfo.value = info;
  };

  const getUserInfo = () => {
    return new Promise((resolve, reject) => {
      getUserInfoFn().then((res) => {
        setUserInfo(res.data)
        console.log("用户信息: " , res.data)
        resolve(res.data);
      }).catch(err => reject(err));
    });
  };

  return {
    userInfo,
    setUserInfo,
    getUserInfo
  };
});