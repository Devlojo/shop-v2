"use client";

import { useActionState } from "react";
import signup from "../actions/signup";

const SignupForm = () => {
  const [error, formAction, isPending] = useActionState(signup, null);
  return (
    <form action={formAction} className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-medium">Formulaire d'inscription</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="paul"
        name="username"
        className="border rounded-md ml-2"
      />

      <label htmlFor="email">Email </label>
      <input
        type="email"
        name="email"
        placeholder="paul@gmail.com"
        className="border rounded-md ml-2"
      />

      <label htmlFor="password">Password </label>
      <input
        type="password"
        name="password"
        className="border rounded-md ml-2"
      />

      <button disabled={isPending}>S'inscrire</button>
    </form>
  );
};

export default SignupForm;
