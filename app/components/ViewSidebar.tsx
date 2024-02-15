"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ButtonFollow from "./etc/ButtonFollow";
import Stats from "./etc/Stats";
import { UserAuth } from "../context/Auth";

const ViewSideBar = () => {
  const { user } = UserAuth();
  const [, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <div className=" px-3 py-4 ml-10 mr-10 w-80 flex-shrink-0 ">
      <div className="avatar online">
        <div className="w-48 rounded-full">
          {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
           */}
          <Image
            src="/images/foto.webp"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="mt-5 mb-5">
        <h1 className="tracking-widest font-light text-xl ">Gybran Nauval Y</h1>
        <h1 className=" font-bold text-xs">Software Engineering</h1>
      </div>

      <ButtonFollow>Follow</ButtonFollow>
      <div className="mt-5"></div>

      <Stats />
      <ul className="menu w-56 rounded-box mt-3 ">
        {user && (
          <li className=" cursor-pointer">
            <Link href="/albums">Albums</Link>
          </li>
        )}
        <li>
          <a>Archive</a>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default ViewSideBar;
