"use client";

import logout from "../actions/logout";

const LogoutButton = () => {
  return (
    <button
      className="hover:bg-red-400 border border-b-red-400 p-2 rounded-2xl"
      onClick={() => logout()}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
