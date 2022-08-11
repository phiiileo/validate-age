// format http success response
const SuccessResponse = (res, message) => {
  res.statusCode = 200;
  res.end(JSON.stringify({ age:message, data:message }));
};

// format http bad request response
const BadRequestResponse = (res, message, statuscode = 400) => {
  res.statusCode = statuscode;
  res.end(message);
};

// format http too many request response
const TooManyRequestResponse = (res, timeleft) => {
  res.statusCode = 429;
  res.end(
    `Too many request please wait for ${timeleft} milliseconds to try again`
  );
};

// format http server error response
const ServerError = (res, error, message) => {
  console.log(error);
  res.statusCode = 500;
  res.end(
    message ||
      `Server error. Something unexpected happened please contact support!`
  );
};

module.exports = {
  SuccessResponse,
  BadRequestResponse,
  ServerError,
  TooManyRequestResponse,
};
