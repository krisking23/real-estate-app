import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button
          type="button"
          className="bg-gray-800 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
          Sign In
        </button>
        <button
          type="button"
          className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
        >
          Continue with google
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link href="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
