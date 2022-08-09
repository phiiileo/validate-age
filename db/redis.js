import Redis from "ioredis";
import config from "../config/index.js";

// const redis = new Redis();
const redis = new Redis({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
    password: config.REDIS_PASSWORD
});
export default redis;