<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" body-style="padding:0 20px;">
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">{{ username }}</p>
            <p class="access">{{ useraccess }}</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登陆时间: <span>{{ lasttime }}</span>
          </p>
          <p>
            上次登陆地点: <span>{{ lastplace }}</span>
          </p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 15px">
        <table class="orders">
          <tr>
            <th>品牌</th>
            <th>销售总额</th>
            <th>本月销售</th>
          </tr>
          <tr v-for="item in orders" :key="item.class">
            <td>{{ item.class }}</td>
            <td>{{ item.total }}</td>
            <td>{{ item.month }}</td>
          </tr>
        </table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="countData">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
          shadow="hover"
        >
          <div class="icon" :style="{ background: item.color }">
            <i :class="'el-icon-' + item.icon"></i>
          </div>
          <div class="detail">
            <p class="num">¥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 200px; margin-top:5px;" shadow="hover"> </el-card>
      <div class="graph">
        <el-card shadow="hover" style="width:360px;height:240px;"></el-card>
        <el-card shadow="hover" style="width:360px;height:240px;"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "home-article",
  data() {
    return {
      userImg: require("@/assets/img/logo.png"),
      username: "Admin",
      useraccess: "超级管理员",
      lasttime: "2022-5-7",
      lastplace: "上海",
      orders: [
        {
          class: "oppo",
          total: 22000,
          month: 3500,
        },
        {
          class: "vivo",
          total: 24000,
          month: 2200,
        },
        {
          class: "苹果",
          total: 65000,
          month: 5500,
        },
        {
          class: "小米",
          total: 45000,
          month: 6500,
        },
        {
          class: "三星",
          total: 34000,
          month: 2000,
        },
        {
          class: "魅族",
          total: 22000,
          month: 3000,
        },
      ],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.user {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(224, 224, 224);
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid rgb(224, 224, 224);
    margin: 20px 0;
  }
  .userInfo {
    margin: auto;
    p {
      margin: 0;
    }
    .name {
      font-size: 24px;
    }
    .access {
      font-size: 10px;
      color: gray;
    }
  }
}
.login-info {
  font-size: 12px;
  color: gray;
  margin: 15px 0;
  span {
    margin-left: 3em;
  }
}

.orders {
  width: 100%;
  height: 300px;
  th {
    font-size: 14px;
  }
  td {
    text-align: center;
    font-size: 14px;
    color: gray;
  }
}

.countData {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .el-card {
    height: 60px;
    width: 31%;
    margin: 5px;
  }
  .detail {
    margin: 10px;
  }
  .icon {
    width: 30%;
    height: 60px;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
  }
  .num {
    margin: 0;
  }
  .txt {
    margin-top: 5px;
    font-size: 10px;
    color: gray;
  }
}

.graph {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-between;
}
</style>