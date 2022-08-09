import response from '../utils/http_response.js';

// Returns welcome  message when client hits the base url
const indexRoute = async (req, res) => {
    try {
        return response.SuccessResponse(res, 'Calculate age app service is running successfully. visit /howold to calculate age', {});
    } catch (err) {
        return response.ServerError(res, err, err.message || err);
    }
}

export default {
    indexRoute
}