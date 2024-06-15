const jwt = require("jsonwebtoken");

function verifyToken(secret) {
  return function (req, scope, schema) {
    console.log("verifyToken");
    try {
      const bearerHeader = req.headers["authorization"];
      console.log(bearerHeader);
      console.log(secret);
      if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        const jwtTokenDecode = jwt.verify(bearerToken, secret);
        return (
          jwtTokenDecode &&
          jwtTokenDecode !== null &&
          jwtTokenDecode !== undefined
        );
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };
}

module.exports = verifyToken;
