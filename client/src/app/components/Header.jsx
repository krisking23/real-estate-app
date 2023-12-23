import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="flex bg-slate-100 items-center p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="text-xs sm:text-sm bg-transparent focus:outline-none w-24 sm:w-64"
          />
        </form>
        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link href="/about">
            <img
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
              alt="user"
              className="h-7 w-7 rounded-full object-cover"
            />
          </Link>
        </ul>
      </nav>
    </header>
  );
};
