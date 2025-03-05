import User from "../models/User";
import { cookies } from "next/headers";

const isAuthenticated = async (options) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return false;
  }
  const user = await User.findOne({ token: token.value }).select("-salt -hash");
  if (!user) {
    return false;
  }
  if (options?.getInfos) {
    return user;
  }
  return true;
};

export default isAuthenticated;
