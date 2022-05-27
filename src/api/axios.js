import axios from "axios";
import config from "@/config";

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  // 初始化
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  getInsideConfig(){
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }
  // 拦截器
  interceptors(instance) {
    instance.interceptors.request.use(function (config) {
      // 发送请求前
      return config;
    }, function(error) {
      return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      console.log(response);
    }, function(error) {
      return Promise.reject(error);
    })
  }
  // 发送请求并处理
  request(options) {
    const instance = axios.create()
    // 解构
    options = { ...this.getInsideConfig(), ...options}
    // 拦截
    this.interceptors(instance)

    return instance(options)
  }
}
export default new HttpRequest(baseUrl)