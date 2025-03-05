"use server";

import User from "../models/User";
import { SHA256 } from "crypto-js";
import encBase64 from "crypto-js/enc-base64";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import uid2 from "uid2";

const login = async (_currentError, formData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      throw new Error("Missing parameters");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Unauthorized");
    }
    const newHash = SHA256(password + user.salt).toString(encBase64);
    if (newHash !== user.hash) {
      throw new Error("Unauthorized");
    }
    const cookieStore = await cookies();
    cookieStore.set("token", user.token, {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 14,
    });
  } catch (error) {
    switch (error.message) {
      case "Missing parameters":
        return "Please fill in all the fields";
      case "Unauthorized":
        return "Wrong email or password";
      default:
        return "An error has occured, please try again in a few moments";
    }
  }
  redirect("/");
};

export default login;
