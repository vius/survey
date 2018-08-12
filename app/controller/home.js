'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app
    } = this;
    let param = ctx.request.body
    console.log(param)
    let data = param
    data.list = JSON.stringify(data.list);
    data.random = JSON.stringify(data.random);
    const conn = await app.mysql.beginTransaction(); // 初始化事务
    try {
      await conn.insert('answer', data);
      await conn.commit(); // 提交事务
      this.ctx.body = {
        msg: "success"
      }
    } catch (err) {
      await conn.rollback(); // 一定记得捕获异常后回滚事务！！
      console.log(err)
      ctx.response.status = 500
    }

  }
}

module.exports = HomeController;
