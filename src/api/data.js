import axios from './axios'

export const getData = () => {
  return axios.request({
    url: '/home/getData'
  })
}

export const getUserList = () =>{
  return axios.request({
    url: '/user/getUserList'
  })
}