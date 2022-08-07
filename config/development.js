const logger = require('../logger');

module.exports = {
  db: {
    database: 'ntask',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'ntask.sqlite',
      logging: (sql) => {
        logger.info(`[${new Date()}] ${sql}`);
      },
      define: {
        underscored: true
      }
    }
  },
  jwt: {
    secret: process.env.SECRET_KEY,
    options: { session: false }
  }
};
