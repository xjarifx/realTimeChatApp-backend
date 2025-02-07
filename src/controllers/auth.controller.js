import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../lib/utils.js";

const signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All field must be filled." });
    }

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exist." });

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({ newUser });
    } else {
      return res.status(400).json({ message: "Invalid user data." });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const login = (req, res) => {
  res.send("Log in");
};

const logout = (req, res) => {
  res.send("Log out");
};

export { signup, login, logout };
