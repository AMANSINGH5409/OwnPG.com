import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User does not exists !!" });

    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isCorrectPassword)
      return res.status(400).json({ message: "Invalid Credentials !!" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        isOwner: existingUser.isOwner,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong !!" });
  }
};

export const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User Already Exists !" });

    const generateSalt = Math.floor(Math.random() * 12) + 1;

    const hashedPassword = await bcrypt.hash(password, generateSalt);

    const result = await User.create({ email, password: hashedPassword, name });

    result.salt = generateSalt;

    const token = jwt.sign(
      { email: result.email, id: result._id, isOwner: result.isOwner },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong !!", error: error.message });
  }
};
