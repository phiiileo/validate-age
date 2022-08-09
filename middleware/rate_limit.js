const response = require(`./../utils/http_response.js`);
const redis = require(`./../db/redis.js`);
const config = require(`../config/index.js`);

const rateLimit = async (req, res, next) => {
  //get the client ip address
  const ipaddress =
    req.headers[`x-forwared-for`] || req.connection.remoteAddress;
  // log the ip on redis server
  const iprequest = await redis.incr(ipaddress);
  let ttl;
  //get the number of allowed requests
  const numberofrequest = config.NUMBER_OF_ALLOWED_REQUEST;
  //check if it's client first request then set the expiry
  if (iprequest === 1) {
    //get the time limit for number of request
    const timeframe = config.TIME_LIMIT;
    //set the expiry time for client
    await redis.expire(ipaddress, timeframe);
    ttl = timeframe;
  } else ttl = await redis.ttl(ipaddress);
  //check if number of request is greater than allowed number, if yes return error
  return iprequest > numberofrequest
    ? response.TooManyRequestResponse(res, ttl)
    : next();
};
module.exports = {
  rateLimit,
};
