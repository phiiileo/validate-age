import response from '../utils/http_response.js';
import age_service from '../services/age_service.js';
import ValidationError from '../helpers/ValidationError.js';

const calculateAge = async (req, res) => {
    try {
        const dob = req.query.dob;
        if (!dob) return response.BadRequestResponse(res, 'Please pass date of birth (dob) has query parameter');
        // calculate age from query
        var age = age_service.calaculateAge(dob);
        if (!age) return response.BadRequestResponse(res, "Please pass a valid date of birth");
        // send response
        response.SuccessResponse(res, age);
    } catch (err) {
        if (err instanceof ValidationError) return response.BadRequestResponse(res, err.message);
        return response.ServerError(res, err);
    }
}

export default {
    calculateAge
}