import response from './../utils/http_response.js';
import redis from "./../db/redis.js";
import config from '../config/index.js';

const rateLimit = async (req, res, next) => {
    try {
        // get the client ip address
        const ipaddress = req.headers['x-forwared-for'] || req.connection.remoteAddress;
        // log the ip on redis server
        const iprequest = await redis.incr(ipaddress);
        let ttl;
        // get the number of allowed requests
        const numberofrequest = config.NUMBEROFALLOWEDREQUEST;
        // check if it's client first request then set the expiry
        if (iprequest === 1) {
            // get the time limit for number of request
            const timeframe = config.TIMELIMIT;
            // set the expiry time for client
            await redis.expire(ipaddress, timeframe);
            ttl = timeframe;
        }
        else ttl = await redis.ttl(ipaddress);
        // check if number of request is greater than allowed number, if yes return error
        return iprequest > numberofrequest ? response.TooManyRequestResponse(res, ttl) : next();
    } catch (error) {
        return response.ServerError(res, error);
    }
}

export default {
    rateLimit
}