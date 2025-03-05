"use server";

import { cookies } from "next/headers";

const logout = () => {
  const cookieStore = cookies();
  cookieStore.delete("token");
};

export default logout;
