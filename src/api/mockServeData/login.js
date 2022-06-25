const userProfile = [
  {
    userid: "YYYYY",
    passw: "123456",
    userType: 1,
    username: "admin",
    lastTime: "",
    curTime: "",
  }
]

export default {
  checkLogin(config) {
    const { userid, passw } = JSON.parse(config.body);
    let isUser = 0;
    let userData = {};
    for (let i = 0; i < userProfile.length; i++) {
      let user = userProfile[i];
      if (user.userid == userid) {
        isUser = 1;
        if (user.passw == passw) {
          isUser = 2;
          // 更新登陆数据
          user.lastTime = user.curTime;
          user.curTime = Date.now();

          // 存入用户数据
          userData = {
            username: user.username,
            userType: user.userType,
            lastTime: user.lastTime,
          }
        }
        break;
      }
    }

    if (isUser == 0) {
      return {
        code: 500,
        msg: "用户不存在"
      }
    } else if (isUser == 1) {
      return {
        code: 500,
        msg: "密码错误"
      }
    } else if (isUser == 2) {
      return {
        code: 200,
        data: userData,
        msg: "登录成功！"
      }
    }

  }
}