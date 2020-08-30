const axios = require("axios");
const httpStatusCodes = require("http-status-codes");

const spammerApiHost = process.env.SPAMMER_API_HOST || "localhost";
const spammerApiPort = process.env.SPAMMER_API_PORT || "5435";
const spammerPathPrefix = `http://${spammerApiHost}:${spammerApiPort}`;

function validateResponse(res, expectedCode = httpStatusCodes.OK) {
  if (res.status != expectedCode) {
    throw new Error(
      `Unexpected response from spammer leader! Expected response code [ ${expectedCode} ], but got [ ${res.status} ]`
    );
  }
}

async function startHttpPerformanceRun() {
  const config = {
    headers: {
      "Content-Type": "application/javascript",
    },
  };
  const data = _generateHttpPostData(5, 5, "post", "http://localhost:5435/asd");
  return axios.default
    .post(`${spammerPathPrefix}/v1/performance`, data, config)
    .then((res) => {
      validateResponse(res);
      if (!Object.prototype.hasOwnProperty.call(res.data, "test_uuid")) {
        throw new Error("Test uuid not found in response!");
      }
      return res.data.test_uuid;
    });
}

async function getPerformanceTests() {
  return axios.default
    .get(`${spammerPathPrefix}/v1/performance`)
    .then((res) => {
      validateResponse(res);
      return res.data.performance_tests;
    });
}

function _generateHttpPostData(runtimeSeconds, rps, method, url) {
  return `module.exports = {
    runtimeSeconds: ${runtimeSeconds},
    rps: ${rps},
    interface: 'http',
    method: '${method}',
    url: '${url}'}`;
}

module.exports = { startHttpPerformanceRun, getPerformanceTests };
