import React from "react";

const cartList = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-medium">Mon panier</h2>
      <button className="border border-b-red-400 px-1 hover:cursor-pointer hover:bg-red-400">
        Payer
      </button>
    </div>
  );
};

export default cartList;
