const response = require(`../utils/http_response.js`);
const age_service = require(`../services/age_service.js`);
const ValidationError = require(`../helpers/ValidationError.js`);

const calculateAge = async (req, res) => {
  try {
    const dob = req.query.dob;
    if (dob == `undefined`) 
      throw new ValidationError(`dob cannot be undefined`, 422);
    if (dob == `null`) throw new ValidationError(`dob cannot be null`, 422);
    if (!dob) throw new ValidationError(`Please pass dob has query parameter`);
    // calculate age from query
    const age = age_service.calaculateAge(dob);
    // send response
    response.SuccessResponse(res, age);
  } catch (error) {
    if (error instanceof ValidationError)
      return response.BadRequestResponse(res, error.message, error.statuscode);
    return response.ServerError(res, error);
  }
};

module.exports = {
  calculateAge,
};
