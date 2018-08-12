const Service = require('egg').Service;

class DataService extends Service {
  async insert(data) {
    console.log('service',data)
    const result = await this.app.mysql.insert('survey', { id: data.id });
    return result
  }
}

module.exports = DataService;
