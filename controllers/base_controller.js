const response = require(`../utils/http_response.js`);

// Returns welcome  message when client hits the base url
const indexRoute = async (req, res) => {
  return response.SuccessResponse(
    res,
    `Calculate age app service is running successfully. visit /howold to calculate age`,
    {}
  );
};

module.exports = {
  indexRoute,
};
