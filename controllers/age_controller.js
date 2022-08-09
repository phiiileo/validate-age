const response = require(`../utils/http_response.js`);
const age_service = require(`../services/age_service.js`);
const ValidationError = require(`../helpers/ValidationError.js`);

const calculateAge = async (req, res) => {
  try {

    const dob = req.query.dob;
    if (!dob) throw new ValidationError(`Please pass dob has query parameter`);
    
    // calculate age from query
    const age = age_service.calaculateAge(dob);

    // send response
    response.SuccessResponse(res, age);
  } catch (error) {
    if( error instanceof ValidationError) 
      return response.BadRequestResponse(res, error.message);
    return response.ServerError(res, error);
}
}

module.exports = {
  calculateAge,
}
