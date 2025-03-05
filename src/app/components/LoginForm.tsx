"use client";
import React from "react";
import { useActionState } from "react";
import login from "../actions/login";

const LoginForm = () => {
  const [error, formAction, isPending] = useActionState(login, null);
  return (
    <form action={formAction} className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-medium">Formulaire de connexion</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="paul@gmail.com"
        className="border rounded-md ml-2"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        className="border rounded-md ml-2"
      />

      <button disabled={isPending}>Se connecter</button>
    </form>
  );
};

export default LoginForm;
