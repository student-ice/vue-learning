import request from "@/utils/request.js";

export const login = (data) => {
  return request({
    url: "admin/login",
    method: "POST",
    data
  })
}

export const getUserInfo = () => {
  return request({
    url: "admin/getUserInfo",
    method: "POST"
  })
}