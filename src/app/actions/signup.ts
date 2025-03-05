"use server";

import User from "../models/User";
import { SHA256 } from "crypto-js";
import uid2 from "uid2";
import encBase64 from "crypto-js/enc-base64";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const signup = async (_currentError, formData) => {
  try {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    if (!username || !email || !password) {
      throw new Error("Missing parameters");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new Error("Email exist");
    }
    const token = uid2(64);
    const salt = uid2(16);
    const hash = SHA256(password + salt).toString(encBase64);
    await User.create({
      username,
      email,
      token,
      salt,
      hash,
    });
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 14,
    });
  } catch (error) {
    console.log(error);

    switch (error.message) {
      case "Missing parameters":
        return "Please fill in all the fields";
      case "Email exist":
        return "This Email is already used";
      default:
        return "An error has occured, please try again in a few moments";
    }
  }
  redirect("/");
};

export default signup;
