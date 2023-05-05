/**
 * @summary - Generate and verify JWT
 */
const jwt = require("jsonwebtoken");

const config = require("../config/config");

function generateJWT(payload) {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign(payload, config.jwtSecret, {
        algorithm: "HS256",
        expiresIn: "480h",
      });
      jwt.verify(token, config.jwtSecret, function (err, authData) {
        resolve({
          token: token,
          sessionTime: authData.exp,
          payload: payload,
        });
      });
    } catch (err) {
      reject(err);
    }
  });
}
function verifyJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, function (err, decoded) {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}
module.exports = {
  generateJWT,
  verifyJWT,
};
