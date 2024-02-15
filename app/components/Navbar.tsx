"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { UserAuth } from "../context/Auth";
import { auth } from "../context/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import router from "next/router";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
      router.push("/albums");
    } catch (error) {
      console.error("failed to sign in", error);
    }
  };
  const logout = async () => {
    try {
      auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("failed to sign out", error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </ul>
      <ul className="flex">
        {user ? (
          <ul className="flex">
            <li onClick={logout} className="p-2 cursor-pointer">
              {" "}
              {user && (
                <li className="p-2 cursor-pointer">
                  <Link href="/profile">Welcome, {user.displayName}</Link>
                  <p className="cursor-pointer" onClick={logout}>
                    Sign out
                  </p>
                </li>
              )}
            </li>
          </ul>
        ) : (
          <div>
            <ul className="flex">
              <li onClick={login} className="p-2 cursor-pointer">
                Login
              </li>
            </ul>
            {/* <p>Welcome, {user.displayName}</p> */}
            {/* <p className="cursor-pointer" onClick={logout}>
            Sign out
          </p> */}
          </div>
        )}
        {/* {user && (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Welcome, {user.displayName}</Link>
            <p className="cursor-pointer" onClick={logout}>
              Sign out
            </p>
          </li>
        )} */}
      </ul>
    </div>
  );
};

export default Navbar;
