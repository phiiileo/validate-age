import dotenv from 'dotenv';
dotenv.config();

// aggregate app configs
const config = {
    REDISHOST: process.env.REDISHOST,
    REDISPORT: process.env.REDISPORT,
    REDISPASSWORD: process.env.REDISPASSWORD,
    NUMBEROFALLOWEDREQUEST: process.env.NUMBEROFALLOWEDREQUEST || 3,
    TIMELIMIT: process.env.TIMELIMIT || 1
}
console.log(config)
export default config;