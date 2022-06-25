import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import login from './mockServeData/login'

Mock.mock('/home/getData', homeApi.getData)
Mock.mock('/user/getUserList', user.getUserList)
Mock.mock('/user/create', 'post', user.createUser)
Mock.mock('/user/edit', 'post', user.updateUser)
Mock.mock('/user/del', 'post', user.deleteUser)
Mock.mock('/login', 'post', login.checkLogin)