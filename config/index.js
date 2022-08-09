const dotenv = require(`dotenv`);
dotenv.config();

// aggregate app configs
const config = {
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_URL: process.env.REDIS_URL,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  NUMBER_OF_ALLOWED_REQUEST: process.env.NUMBER_OF_ALLOWED_REQUEST || 3,
  TIME_LIMIT: process.env.TIME_LIMIT || 1,
};

module.exports = config;
