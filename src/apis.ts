import type { AxiosInstance } from "axios";
import axios from "axios";

// 全局设置 axios 发送请求带上cookie
axios.defaults.withCredentials = true
import { ElMessage } from 'element-plus'


/**
 * 错误处理: https://www.axios-http.cn/docs/handling_errors
 * ① 发送请求时出了点问题，比如网络错误
 * ② 请求已经成功发起，但没有收到响应
 * ③ 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
 */

export const service: AxiosInstance = axios.create({
  // baseURL: 'http://usa1.whaleluo.top:8456/',
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10 * 1000, // 请求超时时间
  headers: { "Content-Type": "application/json;charset=UTF-8" }
});


// // 添加请求拦截器
// service.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   // 检测是否
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// Add a response interceptor
service.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  ElMessage({
    message: `请求成功!`,
    type: 'success',
  })
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  ElMessage({
    message: `请求出错,请检查后端和提交参数!${error}`,
    type: 'warning',
  })
  return Promise.reject(error);
});


