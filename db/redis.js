import Redis from "ioredis";
import config from "../config/index.js";

// const redis = new Redis();
const redis = new Redis({
    host: config.REDISHOST,
    port: config.REDISPORT,
    password: config.REDISPASSWORD
});
export default redis;