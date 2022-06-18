import Mock from 'mockjs'

// get请求从.url中获取参数，post从body中获取参数
function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')  // ？
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '}"'
  )
}

// 模拟数据
let UserList = []
const count = 10

for (let i = 0; i < count; i++) {
  UserList.push(
    Mock.mock({
      id: Mock.Random.guid(),
      username: Mock.Random.cname(),
      gender: Mock.Random.integer(0, 1),
      age: Mock.Random.integer(18, 50),
      userType: Mock.Random.integer(0, 1)
    })
  )
}

export default {
  getUserList(config) {
    const { page = 1, limit = 20 } = param2Obj(config.url)  // limit为分页大小
    const MockList = UserList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    const pageList = MockList.map(user => {
      user.gender = parseInt(user.gender) == 1 ? "男" : "女"
      user.userType = parseInt(user.userType) == 1 ? "管理员用户" : "普通用户"

      return user
    })

    return {
      code: 200,
      count: UserList.length,
      list: pageList
    }
  },

  createUser(config) {
    console.log(config)
    const { username, gender, age, userType } = JSON.parse(config.body)
    UserList.unshift({
      id: Mock.Random.guid(),
      username: username,
      gender: gender,
      age: age,
      userType: userType,
    })

    return {
      code: 200,
      data: {
        msg: '添加成功！'
      }
    }
  },


  deleteUser(config) {
    const { id } = JSON.parse(config.body);
    console.log("deleteUser中的if:", id);
    if (!id) {
      return {
        code: 200,
        msg: "参数不正确"
      }
    } else {
      UserList = UserList.filter(u => u.id !== id)
      return {
        code: 200,
        msg: "删除成功"
      }
    }
  },


  updateUser(config) {
    const { id, username, gender, age, userType } = JSON.parse(config.body)
    const sex_num = parseInt(gender)

    UserList.some(u => {
      if (u.id === id) {
        u.username = username
        u.gender = sex_num
        u.age = age
        u.userType = userType

        return true
      }
    })

    return {
      code: 200,
      msg: "编辑成功"
    }
  }
}