"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../models/Product";

const ProductsList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex justify-center flex-col items-center gap-2">
      <h2 className="text-xl font-medium">Products List</h2>
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {products.map((product) => {
          return (
            <article
              key={product._id.toString()}
              className=" border border-gray-600 p-2  rounded-b-xl flex flex-col items-center"
            >
              <h3>{product.title}</h3>
              <Link
                href={`/products/${product._id}`}
                className="hover:opacity-85"
              >
                <Image
                  src={product.thumbnail}
                  alt="Image du produit"
                  width={200}
                  height={200}
                />
              </Link>
              <div className="flex gap-2 items-center">
                <button className="border border-b-red-400 px-1 hover:cursor-pointer hover:bg-red-400">
                  -
                </button>
                <p>0</p>
                <button className="border border-b-red-400 px-1 hover:cursor-pointer hover:bg-red-400">
                  +
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
