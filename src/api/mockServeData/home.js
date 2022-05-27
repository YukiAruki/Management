// import Mock from 'mockjs'

export default {
  getData() {
    return {
      code: 200,
      orders: [
        {
          "class": "oppo",
          "total": 22000,
          "month": 3500
        },
        {
          "class": "vivo",
          "total": 24000,
          "month": 2200
        },
        {
          "class": "苹果",
          "total": 65000,
          "month": 5500
        },
        {
          "class": "小米",
          "total": 45000,
          "month": 6500
        },
        {
          "class": "三星",
          "total": 34000,
          "month": 200
        },
        {
          "class": "魅族",
          "total": 22000,
          "month": 3000
        }
      ],
      countData: [
        {
          "name": "今日支付订单",
          "value": 1234,
          "icon": "success",
          "color": "#2ec7c9"
        },
        {
          "name": "今日收藏订单",
          "value": 1234,
          "icon": "star-on",
          "color": "#ffb980"
        },
        {
          "name": "今日未支付订单",
          "value": 1234,
          "icon": "s-goods",
          "color": "#5ab1ef"
        },
        {
          "name": "本月支付订单",
          "value": 1234,
          "icon": "success",
          "color": "#2ec7c9"
        },
        {
          "name": "本月收藏订单",
          "value": 1234,
          "icon": "star-on",
          "color": "#ffb980"
        },
        {
          "name": "本月未支付订单",
          "value": 1234,
          "icon": "s-goods",
          "color": "#5ab1ef"
        }
      ]
    }
  }
}