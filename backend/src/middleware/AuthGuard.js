/**
 * @summary - Auth gaurd
 */
const Auth = require("./Auth");

async function AuthGuard(req, res, next) {
  try {
    const authToken = req.headers["authorization"];
    console.log("authToken = ", authToken);
    if (!authToken) {
      return res.status(401).json({
        status: "error",
        message: "Auth token not found",
      });
    }

    const bearer = authToken.split(" ");
    const bearerToken = bearer[1];
    let authData = await Auth.verifyJWT(bearerToken);

    req.user = { ...authData };
    req.user_id = authData._id;

    next();
  } catch (e) {
    return res.status(401).send({
      status: "error",
      message: e.message,
      data: e,
    });
  }
}

module.exports = AuthGuard;
