import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "itsasecret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/user/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/user/login");
  }
};

export default requireAuth;
