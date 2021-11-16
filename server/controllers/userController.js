import User from "../modals/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  const newPassword = await bcryptjs.hash(req.body.password, 10);
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: newPassword,
  };
  const newUser = new User(user);
  try {
    await newUser.save();
    console.log(user);
    res.status(201).json({ status: "success", newUser });
  } catch (error) {
    res.status(409).json({ status: "error", message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      res
        .status(409)
        .json({ status: "error", message: "User Not Found! Please Register" });
    } else {
      let isPasswordMatches = await bcryptjs.compare(
        req.body.password,
        user.password
      );
      console.log(isPasswordMatches);
      if (isPasswordMatches) {
        const token = jwt.sign(
          { name: user.name, email: user.email },
          "itsasecret",
          { expiresIn: "1h" }
        );
        res.cookie("jwt", token, {
          maxAge: 3600 * 1000,
          httpOnly: true,
        });
        console.log(token);
        res.status(201).json({ status: "success", token });
      } else {
        res
          .status(409)
          .json({ status: "error", message: "Invalid Credentials" });
      }
    }
  } catch (error) {
    res.status(409).json({ status: "error", message: error.message });
  }
};
