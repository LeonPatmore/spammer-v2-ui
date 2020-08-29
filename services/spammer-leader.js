const axios = require("axios");

const port = 1123;

async function postPerformance(body) {
  // TODO: Post with body.
  axios.default.post(`http://localhost:${port}/`).then(() => {
    // TODO: Validate response
  });
}

module.exports = { postPerformance };
