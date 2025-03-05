import { JSX } from "react";
import Link from "next/link";
import isAuthenticated from "@/app/middlewares/isAuthenticated";

import LogoutButton from "../components/LogoutButton";

export async function Header(): Promise<Element> {
  const authenticated = await isAuthenticated();
  console.log(authenticated);
  return (
    <header className="flex justify-between items-center gap-4 my-2 ">
      <h1 className="text-2xl font-bold text-red-600 hover:cursor-pointer hover:opacity-65">
        <Link href="/">Shop</Link>
      </h1>
      <nav className="flex gap-2 ">
        <Link
          href="/admin"
          className="hover:bg-red-400 border border-b-red-400 p-2 rounded-2xl"
        >
          Back
        </Link>
        <Link
          href="/products"
          className="hover:bg-red-400 border border-b-red-400 p-2 rounded-2xl"
        >
          Products
        </Link>
        <Link
          href="/cart"
          className="hover:bg-red-400 border border-b-red-400 p-2 rounded-2xl"
        >
          Panier
        </Link>
        {!isAuthenticated ? (
          <>
            <Link
              href="/users/login"
              className="hover:bg-red-400 border border-b-red-400 p-2 rounded-2xl"
            >
              Connexion
            </Link>
            <Link
              href="/users/signup"
              className="hover:bg-red-400 border border-b-red-400 p-2 rounded-2xl"
            >
              S'inscrire
            </Link>{" "}
          </>
        ) : (
          <>
            {" "}
            <LogoutButton />
          </>
        )}
      </nav>
    </header>
  );
}
