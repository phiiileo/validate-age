// format http success response
const SuccessResponse = (res, message, data) => {
    res.statusCode = 200;
    res.end(JSON.stringify(message));
}

// format http bad request response
const BadRequestResponse = (res, message, errors = {}) => {
    res.statusCode = 400;
    res.end(JSON.stringify(message));
}

// format http too many request response
const TooManyRequestResponse = (res, timeleft, errors = {}) => {
    res.statusCode = 429;
    res.end(`Too many request please wait for ${timeleft} milliseconds to try again`);
}

// format http server error response
const ServerError = (res, error, message) => {
    console.log(error);
    res.statusCode = 500;
    res.end(message || `Server error. Something unexpected happened please contact support!`);
}

export default {
    SuccessResponse,
    BadRequestResponse,
    ServerError,
    TooManyRequestResponse
}