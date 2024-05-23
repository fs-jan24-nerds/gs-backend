require('dotenv').config();

const development = {
  url: process.env.DATABASE_URL,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development,
};
